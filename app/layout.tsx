import type { Metadata } from 'next';

import './globals/styles/global.css';

export const metadata: Metadata = {
  title: 'Team',
  description: 'List of team',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
