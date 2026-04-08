import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, company, email, phone, size, topic, message } = data

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Ad, e-posta ve mesaj alanları zorunludur.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Geçersiz e-posta adresi.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: 'AiRX - Yeni İletişim / Demo Talebi',
      text: [
        `Ad Soyad         : ${name}`,
        `Şirket           : ${company || '-'}`,
        `E-Posta          : ${email}`,
        `Telefon          : ${phone || '-'}`,
        `Şirket Büyüklüğü : ${size || '-'}`,
        `Konu             : ${topic || '-'}`,
        '',
        'Mesaj:',
        message,
      ].join('\n'),
    })

    return NextResponse.json({ success: true, message: 'Mesajınız gönderildi.' })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { success: false, message: 'Mail gönderilemedi, lütfen tekrar deneyin.' },
      { status: 500 }
    )
  }
}
