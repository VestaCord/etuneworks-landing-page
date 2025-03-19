import PriceList from '@/components/feature/PriceList';
import { type ITimelineItem, Timeline } from '@/components/feature/Timeline';
import { Dropdown } from '@/components/layout/Dropdown';
import { Section } from '@/components/layout/Section';

function Index() {
  const TimelineItems: ITimelineItem[] = [
    {
      date: 'Week <0',
      heading: 'Order Received',
      description: `Thank you for your order! We've received it and are excited to work with you. A sales specialist will be in touch within 24 hours to review your requirements and provide a personalized quote. We'll discuss design preferences, quantities, and any customization options.`,
    },
    {
      date: 'Week 0',
      heading: 'Production Commencing',
      description: `Your sales order and contract are ready for your review. Once we receive your down payment, we'll officially begin production. We'll send you a confirmation email when production starts.`,
    },
    {
      date: 'According to Quote',
      heading: 'Ready For Delivery',
      description: `Your order is now complete! We'll reach out to schedule a convenient delivery time and provide your sales invoice.`,
    },
  ];

  return (
    <div>
      <div className="flex flex-col content-center items-center">
        <h1 id="battery-price-list" className="mb-8 text-4xl font-bold">
          Order Information
        </h1>
        <Dropdown title="Battery Make Specifications">
          <Section>
            <div className="mx-8 flex flex-row items-center justify-center overflow-auto text-white">
              <div className="align-center flex w-full flex-wrap items-center text-left sm:w-1/2 sm:px-6">
                <h3 className="text-3xl font-semibold text-etune-green">
                  Battery Specifications
                </h3>
                <div className="mt-6 text-xl leading-9">
                  Battery Voltage and Capacity range from 12V to 120V, with
                  Capacity varying by Cell. Cells Offered are by the companies
                  shown here. Refer to the Price List below for full specs.
                </div>
              </div>
              <div className="shrink-0">
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
                        <a
                          href="https://www.lgchem.com/main/index"
                          target="_blank"
                        >
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
              </div>
            </div>
          </Section>
        </Dropdown>
        <Dropdown title="Battery Pricing Detail">
          <PriceList />
        </Dropdown>
        <Dropdown title="Order Fulfillment Timeline">
          <div className="pt-4">
            <Timeline items={TimelineItems} />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default Index;
