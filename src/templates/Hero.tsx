import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Input } from '../input/Input';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
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
      <form name="early-access" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="early-access" />
        <HeroOneButton
          title={
            <span className="text-primary-500">Create the best stories.</span>
          }
          description="Take storytime to the next level with AI-assisted storytelling."
          callout="Get early access to the app:"
          input={
            <Input
              id="notify"
              type="email"
              name="email"
              placeholder="Your email address"
              inputClass="sm:w-1/3 h-full"
            />
          }
          button={
            <Button xl hFull nudgeLeft submit>
              Notify Me
            </Button>
          }
        />
        {/* <div data-netlify-recaptcha="true"></div> */}
      </form>
    </Section>
  </Background>
);

export { Hero };
