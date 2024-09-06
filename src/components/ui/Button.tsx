import React, { ButtonHTMLAttributes } from "react";
import { Spinner } from "./Spinner";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  to,
  loading,
  ...rest
}) => {
  const Wrapper = (props: { children: React.ReactNode }) => {
    if (to) {
      return <Link to={to}>{props.children}</Link>;
    } else {
      return <>{props.children}</>;
    }
  };

  return (
    <Wrapper>
      <button
        className={cn(
          `
            flex
            justify-center
            items-center
            gap-2
            focus:outline-none
            text-white
            bg-black
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            mb-2
          `,
          className
        )}
        {...rest}
      >
        {loading && <Spinner />}
        {children}
      </button>
    </Wrapper>
  );
};

export default Button;