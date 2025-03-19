// Create a shared layout between page changes, Inject additional data into pages, Add global CSS
import '../styles/global.css';

import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';

import { Background } from '@/background/Background';
import { Footer } from '@/components/footer/Footer';
import { Meta } from '@/components/layout/Meta';
import { Logo } from '@/components/logo/Logo';
import { NavbarTwoColumns } from '@/components/navigation/NavbarTwoColumns';
import { AppConfig } from '@/utils/AppConfig';

function MyApp({ Component, pageProps }: AppProps) {
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  function handleNavbarHeight(data: number) {
    setNavbarHeight(data);
  }
  return (
    <div className="text-gray-100 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Background color="bg-zinc-800">
        <NavbarTwoColumns callback={handleNavbarHeight} logo={<Logo xl />}>
          <li className="hover:text-gray-500 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-500 hover:underline">
            <Link href="/business">Products</Link>
          </li>
          <li className="hover:text-gray-500 hover:underline">
            <Link href="/resources">Resources</Link>
          </li>
          <li className="hover:text-gray-500 hover:underline">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </NavbarTwoColumns>{' '}
        <div style={{ paddingTop: `${navbarHeight}px` }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </Background>
    </div>
  );
}

export default MyApp;
