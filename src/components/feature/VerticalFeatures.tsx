import { VerticalFeatureRow } from '@/components/feature/VerticalFeatureRow';
import { Section } from '@/components/layout/Section';

const VerticalFeatures = () => (
  <Section>
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-white">
        Why Choose <span className="text-etune-blue">E</span>
        <span className="text-etune-green">tune</span>?
      </h2>
    </div>
    <VerticalFeatureRow
      title="Time Critical Solutions"
      description={`With ${new Date().getFullYear() - 2019} years of experience, we've mastered rapid production and delivery, providing fast-turnaround solutions without compromising quality.`}
      image="/assets/images/battery-welded.png"
      imageAlt="Welded Battery"
      reverse
    />
    <VerticalFeatureRow
      title="High-Stakes Integrity"
      description="We've revolutionized battery manufacturing by replacing traditional nickel with high-conductivity copper for our welds. This advanced technique significantly reduces resistance, maximizing energy transfer and enhancing overall battery efficiency."
      image="/assets/images/battery-wrapped.png"
      imageAlt="Wrapped Copper Battery"
    />
  </Section>
);

export { VerticalFeatures };
