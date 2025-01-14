import { ImageResponse } from 'next/og';
import Image from 'next/image';
 
export const runtime = 'edge';
 
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
 
export default function Icon() {
  return new ImageResponse(
    (
      <Image
        src="/favicon.png"
        alt="CMAI Icon"
        width={32}
        height={32}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    ),
    {
      ...size,
    }
  );
} 