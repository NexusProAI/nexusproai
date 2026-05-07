import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY não configurado');
}

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS = {
  'chatbot-whatsapp': 'Chatbot para WhatsApp',
  'chatbot-instagram': 'Chatbot para Instagram',
  'agendamento-automatico': 'Agendamento Automático',
  'qualificacao-leads': 'Qualificação de Leads',
  'consultoria-completa': 'Consultoria Completa',
  'nao-sei': 'Não sei ainda, quero conversar',
};

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function buildLeadHtml({ name, email, phone, company, message, service, source }) {
  const serviceLabel = escapeHtml(SERVICE_LABELS[service] || service);
  const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Novo Lead – Nexus Pro</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:linear-gradient(135deg,#0e1420 0%,#111827 100%);border-radius:16px 16px 0 0;padding:32px 40px;border-bottom:1px solid rgba(34,211,238,0.15);">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.12em;color:#22d3ee;text-transform:uppercase;">Nexus Pro AI</p>
                    <h1 style="margin:6px 0 0;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;">Novo Lead Recebido</h1>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background:rgba(34,211,238,0.1);border:1px solid rgba(34,211,238,0.25);color:#22d3ee;font-size:11px;font-weight:700;padding:6px 14px;border-radius:999px;letter-spacing:0.06em;">LEAD</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#111827;padding:36px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background:rgba(34,211,238,0.06);border-left:3px solid #22d3ee;border-radius:0 8px 8px 0;padding:14px 18px;">
                    <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.7);">
                      Novo contato recebido pelo site em <strong style="color:#ffffff;">${now}</strong>
                    </p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="vertical-align:top;padding-bottom:16px;padding-right:8px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Nome</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#ffffff;">${escapeHtml(name)}</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align:top;padding-bottom:16px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Empresa</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#ffffff;">${escapeHtml(company)}</p>
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="vertical-align:top;padding-bottom:16px;padding-right:8px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);">E-mail</p>
                    <a href="mailto:${escapeHtml(email)}" style="margin:0;font-size:15px;font-weight:600;color:#22d3ee;text-decoration:none;">${escapeHtml(email)}</a>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align:top;padding-bottom:16px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Telefone</p>
                    <a href="tel:${escapeHtml(phone)}" style="margin:0;font-size:15px;font-weight:600;color:#22d3ee;text-decoration:none;">${escapeHtml(phone)}</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" style="padding-bottom:16px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Interesse Principal</p>
                    <span style="display:inline-block;background:rgba(167,139,250,0.12);border:1px solid rgba(167,139,250,0.25);color:#a78bfa;font-size:13px;font-weight:600;padding:5px 14px;border-radius:999px;">${serviceLabel}</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <p style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Mensagem</p>
                    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:16px 18px;">
                      <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.75);line-height:1.65;white-space:pre-wrap;">${escapeHtml(message)}</p>
                    </div>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="https://wa.me/5531994442517?text=${encodeURIComponent(`Olá ${name}! Vi sua mensagem no site da Nexus Pro sobre ${SERVICE_LABELS[service] || service}. Vamos conversar?`)}"
                      style="display:inline-block;background:#22d3ee;color:#030712;font-size:13px;font-weight:800;padding:14px 32px;border-radius:10px;text-decoration:none;letter-spacing:0.02em;">
                      Responder via WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#0e1420;border-radius:0 0 16px 16px;padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);">Origem: ${escapeHtml(source || 'Site NexusProAI')}</p>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);">nexusproai.com.br</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildCareerHtml({ name, email, phone, position, experience, linkedin, github, portfolio, message }) {
  const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  const row = (label, value) => value ? `
    <tr>
      <td style="padding-bottom:14px;vertical-align:top;">
        <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);">${label}</p>
        <p style="margin:0;font-size:14px;font-weight:600;color:#ffffff;">${escapeHtml(value)}</p>
      </td>
    </tr>` : '';

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:linear-gradient(135deg,#0e1420 0%,#111827 100%);border-radius:16px 16px 0 0;padding:32px 40px;border-bottom:1px solid rgba(167,139,250,0.15);">
            <table width="100%" cellpadding="0" cellspacing="0"><tr>
              <td>
                <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.12em;color:#a78bfa;text-transform:uppercase;">Nexus Pro AI</p>
                <h1 style="margin:6px 0 0;font-size:22px;font-weight:800;color:#ffffff;">Nova Candidatura Recebida</h1>
              </td>
              <td align="right">
                <span style="display:inline-block;background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.25);color:#a78bfa;font-size:11px;font-weight:700;padding:6px 14px;border-radius:999px;">CANDIDATURA</span>
              </td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="background:#111827;padding:36px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="background:rgba(167,139,250,0.06);border-left:3px solid #a78bfa;border-radius:0 8px 8px 0;padding:14px 18px;">
                  <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.7);">
                    Candidatura recebida em <strong style="color:#ffffff;">${now}</strong>
                  </p>
                </td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row('Nome', name)}
              ${row('E-mail', email)}
              ${row('Telefone', phone)}
              ${row('Cargo de Interesse', position)}
              ${row('Nível de Experiência', experience)}
              ${row('LinkedIn', linkedin)}
              ${row('GitHub', github)}
              ${row('Portfolio', portfolio)}
              <tr>
                <td style="padding-bottom:14px;">
                  <p style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Apresentação</p>
                  <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:16px 18px;">
                    <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.75);line-height:1.65;white-space:pre-wrap;">${escapeHtml(message)}</p>
                  </div>
                </td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
              <tr>
                <td align="center">
                  <a href="mailto:${escapeHtml(email)}"
                    style="display:inline-block;background:#a78bfa;color:#030712;font-size:13px;font-weight:800;padding:14px 32px;border-radius:10px;text-decoration:none;">
                    Responder ao Candidato
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#0e1420;border-radius:0 0 16px 16px;padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);">nexusproai.com.br — Trabalhe Conosco</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function sendLeadEmail(leadData) {
  const { email } = leadData;
  const toEmail = process.env.CONTACT_EMAIL;
  if (!toEmail) throw new Error('CONTACT_EMAIL não configurado');

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'Nexus Pro <onboarding@resend.dev>',
    to: [toEmail],
    reply_to: email,
    subject: `🚀 Novo lead: ${leadData.name} (${leadData.company}) — ${SERVICE_LABELS[leadData.service] || leadData.service}`,
    html: buildLeadHtml(leadData),
  });
}

export async function sendCareerEmail(careerData, pdfBuffer, filename) {
  const toEmail = process.env.CONTACT_EMAIL;
  if (!toEmail) throw new Error('CONTACT_EMAIL não configurado');

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'Nexus Pro <onboarding@resend.dev>',
    to: [toEmail],
    reply_to: careerData.email,
    subject: `💼 Nova candidatura: ${careerData.name} — ${careerData.position}`,
    html: buildCareerHtml(careerData),
    attachments: pdfBuffer ? [{ filename, content: pdfBuffer.toString('base64') }] : [],
  });
}
