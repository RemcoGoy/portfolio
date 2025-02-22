import { Inter, Roboto_Mono, Roboto_Condensed } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});

export const firacode = localFont({
  src: "../app/fonts/FiraCode-Regular.woff2",
});

export const firacode_bold = localFont({
  src: "../app/fonts/FiraCode-Bold.woff2",
});
