import { Section } from '../layout/Section';

export default function PriceList() {
  const pdfUrl = '/assets/pdf/battery-price-list-v8.pdf';

  const handleDownload = () => {
    window.location.href = pdfUrl;
  };
  return (
    <Section>
      <div className="flex flex-col content-center items-center ">
        <h3 id="battery-price-list" className="mb-8 text-4xl font-bold">
          Battery Price List
        </h3>
        <iframe
          src={pdfUrl}
          className="mb-4 h-[85vh] w-full border border-gray-300"
        />
        <button
          className="mt-4 rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-etune-blue hover:underline"
          onClick={handleDownload}
        >
          Download the PDF ⬇
        </button>
      </div>
    </Section>
  );
}
