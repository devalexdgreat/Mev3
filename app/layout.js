import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { DM_Sans, Inter, Poppins } from 'next/font/google'
import Footer from "./Components/Footer";
 
// If loading a variable font, you don't need to specify the font weight
const anyFont = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '300'
})

const dmSans = localFont({
  src: "./fonts/DMSans-Regular.ttf",
  variable: "--dm-sans",
  weight: "300 900",
});

export const metadata = {
  title: "Great Alexander (ADG).",
  description: "Fullstack Dev.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body
        className={`${anyFont.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
