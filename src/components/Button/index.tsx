import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: Props) {
  return <button {...rest}>{children}</button>;
}

export { Button };
