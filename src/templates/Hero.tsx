import { useState } from 'react';

import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Input } from '../input/Input';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Form } from '../storyform/Form';
import { Logo } from './Logo';

const ROBOT_IMAGE = '/assets/images/robot3.png';
const USE_IFRAME_FORM = false;

const Hero = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          {/* <li>
            <Link href="/">
              <a>Sign in</a>
            </Link>
          </li> */}
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-18 pb-32">
        {USE_IFRAME_FORM ? (
          <Form />
        ) : (
          <form
            name="early-access"
            method="post"
            data-netlify="true"
            netlify-honeypot="name"
          >
            <input type="hidden" name="form-name" value="early-access" />
            <span className="invisible">
              <input type="text" name="name" />
            </span>
            <div className={`flex flex-column justify-center`}>
              <img
                src={`${router.basePath}${ROBOT_IMAGE}`}
                className="sm:w-1/4 rounded-lg"
                alt="Robot"
              />
            </div>
            <HeroOneButton
              title={
                <span className="text-primary-500">
                  Create and discover the best stories.
                </span>
              }
              description="Supercharge your creativity with AI-assisted storybuilding."
              callout="Get early access to Gingerblocks:"
              input={
                <Input
                  id="notify"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  inputClass="sm:w-1/3 h-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              }
              button={
                <Button
                  xl
                  hFull
                  nudgeLeft
                  submit
                  disabled={!(email && email.match(/^[^\s@]+@(\w+\.\w+)+$/))}
                >
                  Notify Me
                </Button>
              }
            />
          </form>
        )}
      </Section>
    </Background>
  );
};

export { Hero };
