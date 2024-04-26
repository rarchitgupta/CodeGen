`use client`;
import { fonts } from "./fonts";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.notoSansMono.variable}>
      <body style={{ backgroundColor: "#222831" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
