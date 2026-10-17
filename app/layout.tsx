import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Google_Sans_Flex, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SubNav } from "./components/SubNav";
import { ThemeToggle } from "./components/ThemeToggle";
import { THEME_INIT_SCRIPT } from "./components/ThemeToggle/themeScript";
import styles from "./layout.module.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
  display: "swap",
  // next/font has no fallback metrics for this family
  adjustFontFallback: false,
});

const departureMono = localFont({
  src: [
    {
      path: "./fonts/DepartureMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-departure-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agentic Design System",
  description: "Design system foundation — tokens, typography, color, spacing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrainsMono.variable} ${googleSansFlex.variable} ${departureMono.variable}`}
      // the theme script sets data-theme before hydration
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <ThemeToggle />
        <SubNav />
        <div className={styles.content}>{children}</div>
      </body>
    </html>
  );
}
