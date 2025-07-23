import { Amiri, Lora } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["700"], // Bold weight for H1
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // All the weights you need
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
