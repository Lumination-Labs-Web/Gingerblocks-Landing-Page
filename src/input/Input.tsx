type InputProps = {
  inputClass?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
};

export const Input = ({
  inputClass,
  value,
  onChange,
  ...restProps
}: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`
          form-control
          block
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none
          ${inputClass}
        `}
      {...restProps}
    />
  );
};
