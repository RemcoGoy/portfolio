import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const firacode = localFont({
  src: "./fonts/FiraCode-Regular.woff2",
});

export const firacode_bold = localFont({
  src: "./fonts/FiraCode-Bold.woff2",
});
