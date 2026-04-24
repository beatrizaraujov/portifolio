import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
   
    const { nome, email, mensagem } = await req.json();

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: ['vianabeatricx@gmail.com'],          
      subject: `Novo Contato: ${nome}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Você recebeu uma nova mensagem do portfólio!</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p style="margin-top: 20px;"><strong>Mensagem:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            ${mensagem}
          </div>
        </div>
      `,
    });

   
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Falha ao enviar e-mail' }, { status: 500 });
  }
}