import { InputHTMLAttributes } from "react";

type InputWithoutOnChange = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
>;

type Props = InputWithoutOnChange & {
  label: string;
  error?: string;
  onChange(value: string): void;
};

function TextInput({ onChange, label, error, ...rest }: Props) {
  return (
    <label>
      {label}
      {error}
      <input onChange={(e) => onChange(e.target.value)} {...rest} />
    </label>
  );
}

export type { Props as TextInputProps };
export { TextInput };
