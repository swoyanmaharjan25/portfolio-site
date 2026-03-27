import { Space_Grotesk, Manrope } from "next/font/google";
import "../index.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Swoyan Maharjan | Premium Graphic Designer Portfolio",
  description:
    "A cinematic portfolio for graphic designer Swoyan Maharjan featuring brand identity, packaging, visual storytelling, and premium motion-led presentation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
