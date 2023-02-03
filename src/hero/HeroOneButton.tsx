import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode | string;
  callout?: ReactNode | string;
  button: ReactNode;
  input: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>

    <div className="text-xl mb-1 font-bold">{props.callout}</div>

    <div className="flex flex-row flex-wrap gap-1 justify-center mb-4 h-[4rem]">
      {props.input}
      {props.button}
    </div>
  </header>
);

export { HeroOneButton };
