import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";

export const metadata = {
  title: "Delpo Ltd — Precision Manufacturing for Performance Apparel",
  description:
    "Delpo Ltd is a Hong Kong based OEM manufacturing and quality-control partner for technical motorbike, cycling, ski and golf activewear brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-void text-paper font-body antialiased">
        {children}
      </body>
    </html>
  );
}
