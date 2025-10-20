import "./globals.css";

export const metadata = {
  title: "京都精華大学 学長方針サイト",
  description: "森原規行 学長方針ワンメッセージサイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
