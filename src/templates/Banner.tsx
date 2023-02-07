import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Join the Gingerblocks storyverse."
      subtitle="Start creating and sharing your stories."
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
