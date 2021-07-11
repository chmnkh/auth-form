import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  showPreloader: boolean;
};

function Button({ children, showPreloader, ...rest }: Props) {
  return (
    <button {...rest} disabled={showPreloader}>
      {children}
    </button>
  );
}

export { Button };
