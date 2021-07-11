import { InputHTMLAttributes } from "react";
import block from "bem-cn-lite";
import { Link } from "../Link";

import "./index.scss";

type InputWithoutOnChange = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
>;

type Props = InputWithoutOnChange & {
  label: string;
  link?: { text: string; href: string };
  error?: string;
  onChange(value: string): void;
};

const b = block("text-input");

function TextInput({ onChange, label, error, link, ...rest }: Props) {
  return (
    <label className={b()}>
      <div className={b("upper-part")}>
        <div className={b("label")}>{label}</div>
        {link && (
          <Link href={link.href} blank>
            {link.text}
          </Link>
        )}
      </div>
      <input
        className={b("input", { "with-error": !!error })}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
      <div className={b("error")}>{error}</div>
    </label>
  );
}

export type { Props as TextInputProps };
export { TextInput };
