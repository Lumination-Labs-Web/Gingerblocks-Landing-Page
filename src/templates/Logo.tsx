import { useRouter } from 'next/router';

const LOGO_NAME = '/assets/images/logo.png';
const TITLE_NAME = '/assets/images/title.png';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();

  return (
    <span
      className={`inline-flex items-center ${
        props.xl ? 'sm:w-1/3' : 'sm:w-1/4'
      }`}
    >
      <div className={`w-2/3 p-6`}>
        <img src={`${router.basePath}${LOGO_NAME}`} alt="Logo" />
      </div>

      <div className="pr-4">
        <img src={`${router.basePath}${TITLE_NAME}`} alt="Logo" />
      </div>
    </span>
  );
};

export { Logo };
