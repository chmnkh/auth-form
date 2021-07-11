import block from "bem-cn-lite";
import { ButtonHTMLAttributes } from "react";

import "./index.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  showPreloader: boolean;
};

const b = block("button");

function Button({ children, showPreloader, ...rest }: Props) {
  return (
    <button {...rest} className={b()} disabled={showPreloader}>
      {children}
    </button>
  );
}

export { Button };
