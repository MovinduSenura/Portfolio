import localFont from "next/font/local";
import "./globals.css";

const Baumans = localFont({
  src: "./fonts/Baumans-Regular.ttf",
  variable: "--font-baumans",
});

export const metadata = {
  title: "Senura Aluthge",
  description: "Software Engineering Undergraduate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Baumans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}