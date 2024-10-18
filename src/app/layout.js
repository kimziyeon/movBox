import { Suspense } from "react";
import "../comp/style/common.scss"
import Loading from "../comp/UIUX/Loading";
import M_footer from "../comp/UIUX/M_footer";
import M_header from "../comp/UIUX/M_header";

export const metadata = {

  manifest: "/manifest.json",
  // metadataBase: new URL('https://memorit-jiyeon.vercel.app/'),
  // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),

  title: "Mov :Box",
  description: "Now Showing - 모브박스",
  openGraph: {
    title: 'Mov :Box',
    description: 'Now Showing - 모브박스',
    images: '/mov_box.png'
  },
  twitter: {
    title: 'Mov :Box',
    description: 'Now Showing - 모브박스',
    images: '/mov_box.png'
  },
  icons: {
    icon: '/favicon-16x16.png',
    apple: '/favicon-16x16.png',
    shortcut: '/mov_box.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon-32x32.png',
    }
  },
  keywords: ['movebox', '모브박스', '절찬상영중', '영화', '영화예매', '박스오피스'],
  authors: [{ name: 'Team KIMSONG' }],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    }
  }

};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <M_header />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <M_footer />
      </body>
    </html>
  );
}
