import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

import sheets from '@/lib/google-sheets/sheets-connect';
import { CreateGuestbookRow, GuestbookFormData } from '@/type/guestbooks';
import { validateGuestbookForm } from '@/utils/validate/guestbooks';

export async function POST(req: Request) {
  const data: GuestbookFormData = await req.json();

  const errors = validateGuestbookForm(data);
  if (errors) return NextResponse.json({ success: false, errors }, { status: 400 });

  try {
    const { name, satisfaction, content, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const body: CreateGuestbookRow = {
      id: uuidv4(),
      name,
      satisfaction,
      content,
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: `${process.env.GUESTBOOK_SHEET_NAME}!A2:H`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[...Object.values(body)]]
      }
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Sheets append error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
