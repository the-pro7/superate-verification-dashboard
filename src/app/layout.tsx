import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ErrorBoundary from "@/components/error/ErrorBoundary";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Supr8 Verifications App",
  description: "Verifications dashboard for the supr8 application",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ErrorBoundary>
        <body
          className={`${poppins.className}`}
          suppressHydrationWarning={true}
        >
          {children}
          <Toaster richColors position="bottom-right" closeButton />
        </body>
      </ErrorBoundary>
    </html>
  );
}
