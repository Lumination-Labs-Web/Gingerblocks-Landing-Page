import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Encourage reading and creativity."
      subtitle="Get the app and start creating stories with your kids."
      button={
        <Link href="#notify">
          <a>
            <Button>Get Notified</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
