import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

import sheets from '@/lib/google-sheets/sheets-connect';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  const { password } = await req.json();

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: `${process.env.GUESTBOOK_SHEET_NAME}!A2:H`
    });

    const rows = response.data.values || [];

    const rowIndex = rows.findIndex(row => row[0] === id);
    if (rowIndex === -1) {
      return NextResponse.json(
        { success: false, message: '방명록을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    const storedHash = rows[rowIndex][4];
    const isMatch = await bcrypt.compare(password, storedHash);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: '비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    const deletedAt = new Date().toISOString();

    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: `${process.env.GUESTBOOK_SHEET_NAME}!H${rowIndex + 2}`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[deletedAt]]
      }
    });

    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error('Sheets delete error:', err);
    return NextResponse.json(
      { success: false, message: '삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { name, satisfaction, content, password } = await req.json();

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: `${process.env.GUESTBOOK_SHEET_NAME}!A2:H`
    });

    const rows = response.data.values || [];

    const rowIndex = rows.findIndex(row => row[0] === id);
    if (rowIndex === -1) {
      return NextResponse.json(
        { success: false, message: '방명록을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    if (rows[rowIndex][7]) {
      return NextResponse.json(
        { success: false, message: '삭제된 방명록은 수정할 수 없습니다.' },
        { status: 400 }
      );
    }

    const storedHash = rows[rowIndex][4];
    const isMatch = await bcrypt.compare(password, storedHash);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: '비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    const updatedAt = new Date().toISOString();

    const updatedRow = [
      rows[rowIndex][0],
      name ?? rows[rowIndex][1],
      satisfaction ?? rows[rowIndex][2],
      content ?? rows[rowIndex][3],
      rows[rowIndex][4],
      rows[rowIndex][5],
      updatedAt,
      rows[rowIndex][7]
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: `${process.env.GUESTBOOK_SHEET_NAME}!A${rowIndex + 2}:H${rowIndex + 2}`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [updatedRow]
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        id: updatedRow[0],
        name: updatedRow[1],
        satisfaction: updatedRow[2],
        content: updatedRow[3],
        createdAt: updatedRow[5],
        updatedAt: updatedRow[6]
      }
    });
  } catch (err) {
    console.error('Sheets update error:', err);
    return NextResponse.json(
      { success: false, message: '수정 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
