import { InputHTMLAttributes } from "react";
import block from "bem-cn-lite";

import "./index.scss";

type InputWithoutOnChange = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
>;

type Props = InputWithoutOnChange & {
  label: string;
  error?: string;
  onChange(value: string): void;
};

const b = block("text-input");

function TextInput({ onChange, label, error, ...rest }: Props) {
  return (
    <label className={b()}>
      <div className={b("label")}>{label}</div>
      {error}
      <input
        className={b("input")}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
    </label>
  );
}

export type { Props as TextInputProps };
export { TextInput };
