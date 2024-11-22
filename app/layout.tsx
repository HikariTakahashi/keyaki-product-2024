import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteName = "私文でもわかるハード開発";
const description = "Iotデバイスをどのご家庭にもある材料を使って作る方法";

export const metadata: Metadata = {
  metadataBase: new URL("https://hard-tutorial.vercel.app/"),
  title: {
    default: siteName,
    template: "%s | hard-project",
  },
  description: description,
  openGraph: {
    type: "website",
    url: "https://hard-tutorial.vercel.app/",
    title: siteName,
    description: description,
    siteName: siteName,
  },
  twitter: {
    title: siteName,
    description: description,
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
