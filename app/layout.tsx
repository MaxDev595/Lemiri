import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lemiriSans = localFont({
  src: [
    { path: "./fonts/lemiri-sans-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/lemiri-sans-medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/lemiri-sans-semibold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/lemiri-sans-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-lemiri-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Lemiri AI — цифровой сотрудник для бизнеса",
  description: "Отвечает клиентам, собирает заявки и записывает на услуги круглосуточно и по правилам вашего бизнеса.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={lemiriSans.variable}>{children}</body></html>;
}
