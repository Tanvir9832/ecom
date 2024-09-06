// import { error } from "console";
import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errors?: Record<string, string[]> | null;
};

const Input: React.FC<InputProps> = ({
  className,
  name,
  label,
  errors,
  hidden,
  ...rest
}) => {
  const errorMessage = name ? errors?.[name]?.[0] : null;
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor="latitude"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}

      <input
        className="text-sm rounded-lg  block w-full p-2.5 h-[52px] border border-[#DEDEDE]"
        name={name}
        {...rest}
      />

      {errorMessage ? (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      ) : (
        <span className="text-red-500 text-sm"> {"‎"}</span>
      )}
    </div>
  );
};

export default Input;