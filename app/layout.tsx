import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lemiri AI — цифровой сотрудник для бизнеса",
  description: "Отвечает клиентам, собирает заявки и записывает на услуги — круглосуточно и по правилам вашего бизнеса.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
