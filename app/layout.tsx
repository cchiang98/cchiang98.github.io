import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Casey Chiang | Producer & Journalist',
  description:
    'Clear, human journalism by Casey Chiang across breaking news, political and global affairs reporting, live production, and long-form interviews.',
  openGraph: {
    title: 'Casey Chiang | Producer & Journalist',
    description:
      'Clear, human journalism across breaking news, political and global affairs reporting, live production, and long-form interviews.',
    url: 'https://cchiang98.github.io/',
    siteName: 'Casey Chiang',
    images: [
      {
        url: 'https://cchiang98.github.io/og.png',
        width: 1200,
        height: 630,
        alt: 'Casey Chiang | Producer & Journalist',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casey Chiang | Producer & Journalist',
    description:
      'Clear, human journalism across breaking news, political and global affairs reporting, live production, and long-form interviews.',
    images: ['https://cchiang98.github.io/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
