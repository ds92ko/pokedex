import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to bottom, #D94C4C 0%, #D94C4C 47%, #333 47%, #333 53%, #FFF 53%, #FFF 100%)',
          border: '2px solid #333',
          borderRadius: '50%'
        }}
      >
        <div
          style={{
            width: '40%',
            height: '40%',
            background: 'radial-gradient(circle, #333 0%, #333 40%, #FFF 40%, #FFF 100%)',
            border: '2px solid #333',
            borderRadius: '50%'
          }}
        />
      </div>
    ),
    {
      ...size
    }
  );
}
