import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Theory Blog',
  description: 'Generated by Viktoria Afitova',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
