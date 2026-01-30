import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lolos Kedinasan 2025 - Ebook + Komunitas',
  description: 'Platform belajar CPNS, PPPK, dan sekolah kedinasan dengan ebook, video, dan komunitas aktif.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
