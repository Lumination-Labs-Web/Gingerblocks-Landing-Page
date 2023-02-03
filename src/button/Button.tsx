import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  hFull?: boolean;
  nudgeLeft?: boolean;
  submit?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    'h-full': props.hFull,
    'sm:-translate-x-3': props.nudgeLeft,
  });

  return (
    <button className={btnClass} type={props.submit ? 'submit' : undefined}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center flex flex-col justify-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </button>
  );
};

export { Button };
