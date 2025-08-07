import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  const widthParam = searchParams.get('width');
  const parsedWidth = widthParam ? Math.round(Number(widthParam)) : undefined;
  const width = !parsedWidth || isNaN(parsedWidth) ? 300 : parsedWidth;

  if (!url) return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });

  try {
    const response = await fetch(url);
    if (!response.ok)
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: response.status });

    const buffer = Buffer.from(await response.arrayBuffer());
    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('gif')) {
      return new Response(buffer, {
        status: 200,
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=86400'
        }
      });
    }

    const optimizedBuffer = await sharp(buffer).resize({ width }).webp({ quality: 80 }).toBuffer();

    return new Response(optimizedBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=86400'
      }
    });
  } catch {
    return NextResponse.json({ error: 'Error optimizing image' }, { status: 500 });
  }
}
