import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Superate Verifications App",
  description: "Verifications dashboard for the superate application",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable}`}>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster richColors />
        </QueryClientProvider>
      </body>
    </html>
  );
}
