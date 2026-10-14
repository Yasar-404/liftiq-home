import { Inter } from "next/font/google";

// The only web font. Labels and numbering use Inter too, and the ₹ sign comes
// from system fonts (see styles/fonts.css), so no other font file is fetched.
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
