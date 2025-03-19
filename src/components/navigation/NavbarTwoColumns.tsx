import Link from 'next/link';
import { type ReactNode, useEffect, useRef, useState } from 'react';

type IHandleNavbarHeight = {
  (data: number): void;
};

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
  callback: IHandleNavbarHeight;
};

function NavbarTwoColumns(props: INavbarProps) {
  const navbarRef = useRef<any>(null);
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  useEffect(() => {
    if (navbarRef.current && navbarRef.current.offsetHeight !== 0) {
      const height = navbarRef.current.offsetHeight + 10;
      setNavbarHeight(height);
      props.callback(navbarHeight);
    }
  });

  return (
    <div
      ref={navbarRef}
      className="fixed left-0 top-0 z-50 w-full bg-zinc-700 shadow-md"
    >
      <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between px-3 py-6">
        <div>
          <Link href="/">{props.logo}</Link>
        </div>
        <nav>
          <ul className="navbar flex items-center text-xl font-medium text-gray-300">
            {props.children}
          </ul>
        </nav>
        <style jsx>
          {`
            .navbar :global(li:not(:first-child)) {
              @apply mt-0;
            }
            .navbar :global(li:not(:last-child)) {
              @apply mr-5;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export { NavbarTwoColumns };
