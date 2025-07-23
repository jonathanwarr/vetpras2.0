import { Amiri, Lora } from "next/font/google";
import "./globals.css";
import "@/lib/fontawesome"; // Add this line

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Vetpras 2.0",
  description: "Making Pet Care Accessible",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${amiri.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
