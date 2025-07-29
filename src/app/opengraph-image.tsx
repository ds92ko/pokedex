import { readFile } from 'fs/promises';
import { join } from 'path';

import { ImageResponse } from 'next/og';

export const alt = 'Pokédex';
export const size = {
  width: 800,
  height: 400
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          width: '100%',
          height: '100%',
          background: '#FBEFC4'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            background:
              'linear-gradient(to bottom, #D94C4C 0%, #D94C4C 48%, #333 48%, #333 52%, #FFF 52%, #FFF 100%)',
            border: '3px solid #333',
            borderRadius: '50%'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              background: '#FFF',
              border: '3px solid #333',
              borderRadius: '50%'
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                background: '#333',
                borderRadius: '50%'
              }}
            />
          </div>
        </div>
        <span
          style={{
            fontFamily: '"Cherry Bomb One", system-ui',
            fontSize: 120,
            color: '#F3C93B',
            WebkitTextStroke: '8px #4A5FC1',
            paddingBottom: 20
          }}
        >
          Pokédex
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cherry Bomb One',
          data: await readFile(join(process.cwd(), 'public/fonts/CherryBombOne-Regular.ttf')),
          style: 'normal',
          weight: 400
        }
      ]
    }
  );
}
