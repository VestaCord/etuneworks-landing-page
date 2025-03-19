import { Contact } from '@/components/contact/Contact';
import { Hero } from '@/components/hero/Hero';

import { VerticalFeatures } from '../components/feature/VerticalFeatures';

function Index() {
  return (
    <div className="pb-24 text-gray-100 antialiased">
      <Hero />
      <VerticalFeatures />
      <Contact />
    </div>
  );
}

export default Index;
