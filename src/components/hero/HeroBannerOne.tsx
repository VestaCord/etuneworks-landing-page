import Link from 'next/link';
import React from 'react';

const HeroBannerOne = () => {
  return (
    <div className="flex h-80 w-screen items-center justify-center bg-gradient-to-r from-blue-800 to-etune-blue">
      <div className="relative mx-8 flex items-center justify-start overflow-auto whitespace-nowrap">
        <span className="shrink-0 pr-10 text-white">
          <h2 className="mb-2 text-2xl font-semibold">
            Custom Lithium&nbsp;Ion&nbsp;Batteries
            <br />
            Built With Advanced Manufacturing Methods
          </h2>
          <p className="mb-4">
            HIGH PERFORMANCE with copper and nickel laser welds <br />
            FAST FULFILLMENT with our experienced engineers
          </p>
          <button className="rounded-md border border-white px-6 py-2 hover:bg-white/20">
            <Link href="/business">LEARN MORE</Link>
          </button>
        </span>
        <span className="shrink-0">
          <table className="border-collapse">
            <tbody>
              <tr className="h-36 bg-white/5">
                <td className="border-2 border-gray-400/10 p-3 hover:bg-white/15">
                  <a href="https://www.molicel.com/" target="_blank">
                    <img
                      src="/assets/images/molicel.png"
                      alt="Molicel"
                      width={182}
                      height={146}
                    />
                  </a>
                </td>
                <td className="border-2 border-gray-400/10 p-3 hover:bg-white/15">
                  <a href="https://www.lgchem.com/main/index" target="_blank">
                    <img
                      src="/assets/images/lgchem.png"
                      alt="LG Chem"
                      width={182}
                      height={146}
                    />
                  </a>
                </td>
              </tr>
              <tr className="h-36 bg-white/5">
                <td className="border-2 border-gray-400/10 p-3 hover:bg-white/15">
                  <a
                    href="https://www.samsungsdi.com/business/index.html"
                    target="_blank"
                  >
                    <img
                      src="/assets/images/samsung.svg"
                      alt="Samsung SDI"
                      width={182}
                      height={146}
                    />
                  </a>
                </td>
                <td className="border-2 border-gray-400/10 p-3 hover:bg-white/15">
                  <a href="https://corporate.murata.com/" target="_blank">
                    <img
                      src="/assets/images/murata.svg"
                      alt="Murata"
                      width={182}
                      height={146}
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </span>
      </div>
    </div>
  );
};

export { HeroBannerOne };
