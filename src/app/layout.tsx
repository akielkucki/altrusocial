import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AltruSocial | Sustainable Digital Marketing Agency",
    description:
        "AltruSocial helps brands grow sustainably through ethical SEO, eco-friendly digital marketing, and carbon-conscious advertising. Reduce your footprint, increase your ROI.",
    openGraph: {
        type: "website",
        url: "https://altrusocial.com",
        title: "AltruSocial | Sustainable Digital Marketing Agency",
        description:
            "Eco-friendly digital marketing solutions for businesses focused on sustainability and ethical growth.",
        images: [
            {
                url: "https://altrusocial.com/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "AltruSocial - Sustainable Digital Marketing Agency",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AltruSocial | Sustainable Digital Marketing Agency",
        description:
            "Grow your business sustainably with eco-friendly SEO & digital marketing solutions.",
        images: ["https://altrusocial.com/images/og-image.jpg"],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            {/* Essential Meta Tags */}
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="robots" content="index, follow"/>
            <link rel="canonical" href="https://altrusocial.com"/>

            {/* JSON-LD Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "AltruSocial",
                        "url": "https://altrusocial.com",
                        "logo": "https://altrusocial.com/images/logo.png",
                        "description":
                            "AltruSocial is a sustainable digital marketing agency specializing in ethical SEO, carbon-conscious branding, and green advertising strategies.",
                        "sameAs": [
                            "https://www.linkedin.com/company/altrusocial",
                            "https://twitter.com/altrusocial",
                            "https://www.instagram.com/altrusocial"
                        ],
                    }),
                }}
            />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
