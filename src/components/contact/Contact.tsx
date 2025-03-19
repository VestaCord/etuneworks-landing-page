import Link from 'next/link';

const Contact = () => (
  <div className="flex flex-col items-center">
    <h2 className="mb-6 text-center text-4xl font-bold text-white">
      Come Find Us Here:
    </h2>
    <div className="mx-auto my-8 w-4/5">
      <iframe
        className="h-[500px] w-full"
        frameBorder="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=E%20Tune%20Works+(E%20Tune%20Works)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
    <div className="w-4/5 px-8 py-4">
      <div className="mb-6">
        <h2 className="text-4xl font-bold">
          <span className="text-etune-blue">E </span>
          <span className="text-etune-green">Tune Works</span>
        </h2>
      </div>

      <div className="block sm:grid sm:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center">
            <span className="pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <title>Calender Icon</title>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </span>
            <span>
              <Link target="_blank" href="https://wa.me/87672409">
                <p className="text-xl font-bold hover:underline">
                  By Appointment Only
                </p>
              </Link>{' '}
              <p>Opening Hours</p>
            </span>
          </div>
          <div className="flex items-center">
            <span className="pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <title>Pin Icon</title>
                <path
                  fill-rule="evenodd"
                  d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                />
              </svg>
            </span>
            <span>
              <Link
                target="_blank"
                href={`https://maps.google.com/maps/dir//E+Tune+Works+Pte+Ltd+1+Tampines+North+Dr.+1+T-Space+%2303-29+Singapore+528559/@1.3717604,103.9337724,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x31da3df343c8a637:0x62db8a75bceff314`}
              >
                <p className="text-xl font-bold hover:underline">
                  1 Tampines North Dr 1 #03-29 <br />
                  S528559 T-Space
                </p>
              </Link>
              <p>Mailing Address</p>
            </span>
          </div>
        </div>
        <div>
          <div className="mb-6 flex items-center">
            <span className="pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <title>Mail icon</title>
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </span>
            <span>
              <Link href="mailto:sales@etuneworks.com">
                <p className="text-xl font-bold hover:underline">
                  sales@etuneworks.com
                </p>
              </Link>
              <p>Email Address</p>
            </span>
          </div>
          <div className="flex items-center">
            <span className="pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <title>Phone Icon</title>
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
            </span>
            <span>
              <Link target="_blank" href="https://wa.me/87672409">
                <p className="text-xl font-bold hover:underline">
                  +65 8767 2409
                </p>
              </Link>
              <p>Phone Number</p>
            </span>
          </div>{' '}
        </div>
      </div>
    </div>
  </div>
);

export { Contact };
