import Joi from 'joi';

// Schema de validação para leads
export const leadSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-ZÀ-ÿ\s]+$/)
    .required()
    .messages({
      'string.empty': 'Nome é obrigatório',
      'string.min': 'Nome deve ter pelo menos 2 caracteres',
      'string.max': 'Nome deve ter no máximo 100 caracteres',
      'string.pattern.base': 'Nome deve conter apenas letras e espaços'
    }),

  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2 })
    .lowercase()
    .required()
    .messages({
      'string.empty': 'Email é obrigatório',
      'string.email': 'Email deve ter um formato válido'
    }),

  phone: Joi.string()
    .trim()
    .pattern(/^[\(\)\-\s\d\+]+$/)
    .min(10)
    .max(20)
    .required()
    .messages({
      'string.empty': 'Telefone é obrigatório',
      'string.min': 'Telefone deve ter pelo menos 10 caracteres',
      'string.max': 'Telefone deve ter no máximo 20 caracteres',
      'string.pattern.base': 'Telefone deve ter um formato válido'
    }),

  company: Joi.string()
    .trim()
    .min(2)
    .max(200)
    .required()
    .messages({
      'string.empty': 'Empresa é obrigatória',
      'string.min': 'Nome da empresa deve ter pelo menos 2 caracteres',
      'string.max': 'Nome da empresa deve ter no máximo 200 caracteres'
    }),

  message: Joi.string()
    .trim()
    .min(10)
    .max(1000)
    .required()
    .messages({
      'string.empty': 'Mensagem é obrigatória',
      'string.min': 'Mensagem deve ter pelo menos 10 caracteres',
      'string.max': 'Mensagem deve ter no máximo 1000 caracteres'
    }),

  service: Joi.string()
    .trim()
    .max(100)
    .optional()
    .default('Não especificado'),

  source: Joi.string()
    .trim()
    .max(100)
    .optional()
    .default('Site NexusProAI')
});

// Schema de validação para contato
export const contactSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-ZÀ-ÿ\s]+$/)
    .required()
    .messages({
      'string.empty': 'Nome é obrigatório',
      'string.min': 'Nome deve ter pelo menos 2 caracteres',
      'string.max': 'Nome deve ter no máximo 100 caracteres',
      'string.pattern.base': 'Nome deve conter apenas letras e espaços'
    }),

  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2 })
    .lowercase()
    .required()
    .messages({
      'string.empty': 'Email é obrigatório',
      'string.email': 'Email deve ter um formato válido'
    }),

  phone: Joi.string()
    .trim()
    .pattern(/^[\(\)\-\s\d\+]+$/)
    .min(10)
    .max(20)
    .optional()
    .messages({
      'string.min': 'Telefone deve ter pelo menos 10 caracteres',
      'string.max': 'Telefone deve ter no máximo 20 caracteres',
      'string.pattern.base': 'Telefone deve ter um formato válido'
    }),

  subject: Joi.string()
    .trim()
    .min(5)
    .max(200)
    .required()
    .messages({
      'string.empty': 'Assunto é obrigatório',
      'string.min': 'Assunto deve ter pelo menos 5 caracteres',
      'string.max': 'Assunto deve ter no máximo 200 caracteres'
    }),

  message: Joi.string()
    .trim()
    .min(10)
    .max(1000)
    .required()
    .messages({
      'string.empty': 'Mensagem é obrigatória',
      'string.min': 'Mensagem deve ter pelo menos 10 caracteres',
      'string.max': 'Mensagem deve ter no máximo 1000 caracteres'
    })
});

// Função para sanitizar strings (remover caracteres perigosos)
export function sanitizeString(str) {
  if (typeof str !== 'string') return str;

  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
    .replace(/<[^>]*>/g, '') // Remove tags HTML
    .replace(/[<>&"']/g, (char) => {
      const entities = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#x27;'
      };
      return entities[char];
    });
}

// Função para validar e sanitizar dados
export function validateAndSanitize(data, schema) {
  // Primeiro, valida com Joi
  const { error, value } = schema.validate(data, {
    abortEarly: false,
    stripUnknown: true
  });

  if (error) {
    const errors = error.details.map(detail => ({
      field: detail.path[0],
      message: detail.message
    }));
    return { isValid: false, errors };
  }

  // Depois, sanitiza os dados
  const sanitizedData = {};
  for (const [key, val] of Object.entries(value)) {
    sanitizedData[key] = typeof val === 'string' ? sanitizeString(val) : val;
  }

  return { isValid: true, data: sanitizedData };
}