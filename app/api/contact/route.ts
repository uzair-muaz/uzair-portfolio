import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACT_TO = 'uzair.muaz3k@gmail.com';
/** Resend shared sender — no DNS required. Swap later if you verify a domain. */
const CONTACT_FROM = 'Portfolio Contact <onboarding@resend.dev>';

const INQUIRY_TYPES = new Set([
  'Freelance Project',
  'Contract / Retainer',
  'Full-time Opportunity',
  'Technical Consulting',
  'Partnership / Collaboration',
  'General Inquiry',
]);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildContactEmailHtml(input: {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}) {
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const inquiryType = escapeHtml(input.inquiryType);
  const message = escapeHtml(input.message).replaceAll('\n', '<br />');
  const mailto = `mailto:${encodeURIComponent(input.email)}?subject=${encodeURIComponent(
    `Re: ${input.inquiryType} — ${input.name}`
  )}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>New portfolio inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#0C100E;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0C100E;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:#131B17;border:1px solid #283831;border-radius:16px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:28px 28px 20px;border-bottom:1px solid #283831;background:linear-gradient(180deg,#1C2722 0%,#131B17 100%);">
              <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#F2DC9D;font-weight:700;">
                Portfolio · Direct Inquiry
              </p>
              <h1 style="margin:0;font-size:22px;line-height:1.3;color:#F5F7F2;font-weight:700;">
                New message from ${name}
              </h1>
              <p style="margin:10px 0 0;font-size:13px;color:#A3B2A9;">
                Someone reached out through your site. Reply from Gmail to respond directly.
              </p>
            </td>
          </tr>

          <!-- Meta -->
          <tr>
            <td style="padding:24px 28px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:0 0 14px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#62736A;font-weight:600;">Name</p>
                    <p style="margin:0;font-size:15px;color:#F5F7F2;font-weight:600;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 14px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#62736A;font-weight:600;">Email</p>
                    <p style="margin:0;font-size:15px;">
                      <a href="mailto:${email}" style="color:#98D198;text-decoration:none;font-weight:600;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 8px;">
                    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#62736A;font-weight:600;">Inquiry type</p>
                    <span style="display:inline-block;padding:6px 12px;border-radius:999px;background-color:#F2DC9D1F;border:1px solid #F2DC9D59;color:#F2DC9D;font-size:12px;font-weight:700;">
                      ${inquiryType}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:16px 28px 28px;">
              <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#62736A;font-weight:600;">Message</p>
              <div style="padding:16px 18px;border-radius:12px;background-color:#1C2722;border:1px solid #283831;">
                <p style="margin:0;font-size:14px;line-height:1.65;color:#F5F7F2;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 28px 28px;" align="left">
              <a href="${mailto}"
                 style="display:inline-block;padding:12px 20px;border-radius:999px;background-color:#F2DC9D;color:#0C100E;font-size:13px;font-weight:700;text-decoration:none;">
                Reply to ${name}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 28px;border-top:1px solid #283831;background-color:#0F1512;">
              <p style="margin:0;font-size:11px;line-height:1.5;color:#62736A;">
                Sent from your portfolio contact form · Uzair Muaz
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service is not configured. Please try WhatsApp or email directly.' },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, inquiryType, message } = (body ?? {}) as {
    name?: string;
    email?: string;
    inquiryType?: string;
    message?: string;
  };

  const trimmedName = name?.trim() ?? '';
  const trimmedEmail = email?.trim() ?? '';
  const trimmedType = inquiryType?.trim() ?? '';
  const trimmedMessage = message?.trim() ?? '';

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  if (!isValidEmail(trimmedEmail)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (trimmedMessage.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
  }

  const type = INQUIRY_TYPES.has(trimmedType) ? trimmedType : 'General Inquiry';

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      replyTo: trimmedEmail,
      subject: `Portfolio inquiry: ${type} — ${trimmedName}`,
      text: [
        `New inquiry from your portfolio site`,
        ``,
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        `Inquiry type: ${type}`,
        ``,
        `Message:`,
        trimmedMessage,
      ].join('\n'),
      html: buildContactEmailHtml({
        name: trimmedName,
        email: trimmedEmail,
        inquiryType: type,
        message: trimmedMessage,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
