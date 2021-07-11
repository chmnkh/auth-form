import { AnchorHTMLAttributes } from "react";
import block from "bem-cn-lite";
import "./index.scss";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  blank?: boolean;
};

const b = block("link");

function Link({ children, blank, ...rest }: Props) {
  const blankProps = blank
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a className={b()} {...rest} {...blankProps}>
      {children}
    </a>
  );
}

export { Link };
