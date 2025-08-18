import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

import { GUESTBOOK_LIST_LIMIT } from '@/constants/guestbooks';
import sheets from '@/lib/google-sheets/sheets-connect';
import { CreateGuestbookRow, GuestbookFormData, GuestbookListResponse } from '@/type/guestbooks';
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
      satisfaction: Number(satisfaction),
      content,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: `${process.env.GUESTBOOK_SHEET_NAME}!A2:H`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[...Object.values(body)]]
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        id: body.id,
        name: body.name,
        satisfaction: body.satisfaction,
        content: body.content,
        createdAt: body.createdAt,
        updatedAt: body.updatedAt
      }
    });
  } catch (err) {
    console.error('Sheets append error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '0', 10);
  const pageSize = GUESTBOOK_LIST_LIMIT;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: `${process.env.GUESTBOOK_SHEET_NAME}!A2:H`
    });

    const rows = response.data.values || [];

    const filtered = rows.filter(r => !r[7]);

    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a[6] || '').getTime();
      const dateB = new Date(b[6] || '').getTime();
      return dateB - dateA;
    });

    const start = page * pageSize;
    const paginated = sorted.slice(start, start + pageSize);

    const result: GuestbookListResponse = {
      success: true,
      page,
      pageSize,
      total: filtered.length,
      data: paginated.map(r => ({
        id: r[0],
        name: r[1],
        satisfaction: Number(r[2]),
        content: r[3],
        createdAt: r[5],
        updatedAt: r[6]
      }))
    };

    return NextResponse.json(result);
  } catch (err) {
    console.error('Sheets get error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
