// Rate limiting simples em memória
// Para produção, considere usar Redis ou uma solução externa

const rateLimitMap = new Map();

export function rateLimit(options = {}) {
  const {
    maxRequests = 10,
    windowMs = 15 * 60 * 1000, // 15 minutos por padrão
    message = 'Muitas tentativas. Tente novamente mais tarde.',
    skipSuccessfulRequests = false,
    skipFailedRequests = false
  } = options;

  return (req, res, next) => {
    const identifier = getIdentifier(req);
    const now = Date.now();
    const windowStart = now - windowMs;

    // Remove entradas antigas
    cleanupOldEntries(windowStart);

    // Obtém ou cria entrada para este identificador
    let requests = rateLimitMap.get(identifier) || [];
    requests = requests.filter(timestamp => timestamp > windowStart);

    // Verifica se excedeu o limite
    if (requests.length >= maxRequests) {
      return res.status(429).json({
        error: message,
        retryAfter: Math.ceil((requests[0] - windowStart) / 1000)
      });
    }

    // Adiciona esta requisição à lista
    requests.push(now);
    rateLimitMap.set(identifier, requests);

    // Adiciona headers informativos
    res.setHeader('X-RateLimit-Limit', maxRequests);
    res.setHeader('X-RateLimit-Remaining', Math.max(0, maxRequests - requests.length));
    res.setHeader('X-RateLimit-Reset', Math.ceil((now + windowMs) / 1000));

    // Prossegue para o próximo middleware
    if (next) next();
  };
}

function getIdentifier(req) {
  // Prioriza cabeçalhos de proxy confiáveis
  const forwarded = req.headers['x-forwarded-for'];
  const realIp = req.headers['x-real-ip'];
  const ip = forwarded ? forwarded.split(',')[0].trim() :
             realIp ||
             req.connection?.remoteAddress ||
             req.socket?.remoteAddress ||
             'unknown';

  return ip;
}

function cleanupOldEntries(cutoff) {
  for (const [key, requests] of rateLimitMap.entries()) {
    const validRequests = requests.filter(timestamp => timestamp > cutoff);
    if (validRequests.length === 0) {
      rateLimitMap.delete(key);
    } else {
      rateLimitMap.set(key, validRequests);
    }
  }
}

// Rate limit específico para APIs de formulário
export const formRateLimit = rateLimit({
  maxRequests: 5, // 5 submissões por IP
  windowMs: 15 * 60 * 1000, // 15 minutos
  message: 'Muitas submissões de formulário. Aguarde 15 minutos antes de tentar novamente.'
});

// Rate limit para APIs em geral
export const apiRateLimit = rateLimit({
  maxRequests: 100, // 100 requisições por IP
  windowMs: 15 * 60 * 1000, // 15 minutos
  message: 'Limite de requisições excedido. Tente novamente em alguns minutos.'
});