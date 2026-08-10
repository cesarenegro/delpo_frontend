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
import "mapbox-gl/dist/mapbox-gl.css";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.delpo.online"),
  title: "Delpo Ltd — Precision Manufacturing for Performance Apparel",
  description:
    "Delpo Ltd is a Hong Kong based OEM manufacturing and quality-control partner for technical motorbike, cycling, ski and golf activewear brands.",
  keywords: [
    "OEM manufacturing",
    "performance apparel",
    "quality control",
    "sportswear manufacturing",
    "Hong Kong",
    "activewear OEM",
    "motorbike gear manufacturing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Delpo Ltd — Precision Manufacturing",
    description: "Hong Kong based OEM manufacturing and quality-control partner for technical activewear brands.",
    url: "https://www.delpo.online",
    siteName: "Delpo Ltd",
    images: [
      {
        url: "/images/factory-floor.jpg",
        width: 1200,
        height: 630,
        alt: "Delpo Ltd Manufacturing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delpo Ltd — Precision Manufacturing",
    description: "OEM manufacturing and quality-control partner for technical activewear.",
    images: ["/images/factory-floor.jpg"],
  },
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
