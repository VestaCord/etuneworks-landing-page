import Link from 'next/link';
import React from 'react';

const HeroBannerTwo = () => {
  return (
    <div className="flex h-80 w-screen items-center justify-center bg-gradient-to-r from-cyan-800 to-etune-green">
      <div className="relative mx-8 flex items-center justify-start overflow-auto whitespace-nowrap">
        <span>
          <img
            className="relative h-60"
            src="/assets/images/pattern-techno.png"
            alt="background"
          ></img>
        </span>
        {/* <span className="relative left-0 top-0 flex-shrink-0">
        <table className="border-collapse">
          <tbody>
            <tr className="h-36 bg-white/5">
              <td className="border-2 border-gray-400/10 p-3 hover:bg-white/15">
                <a href="https://www.siemens.com/global/en.html" target="_blank">
                  <img
                    src="/assets/images/siemens.svg"
                    alt="Molicel"
                    width={182}
                    height={146}
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </span> */}
        <span className="ml-48 text-right text-white">
          <h2 className="mb-2 text-2xl font-semibold">
            High-Tech&nbsp;Robotics for
            <br />
            Fast Delivery Times
          </h2>
          <p className="mb-4">
            EXCELLENT RELIABILITY with Siemens PLCs <br />
            FINE TUNED with Model Predictive Control
          </p>
          <button className="rounded-md border border-white px-6 py-2 hover:bg-white/20">
            <Link href="/business/automation">LEARN MORE</Link>
          </button>
        </span>
      </div>
    </div>
  );
};

export { HeroBannerTwo };
