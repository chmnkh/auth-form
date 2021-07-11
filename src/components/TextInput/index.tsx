import { InputHTMLAttributes } from "react";

type InputWithoutOnChange = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
>;

type Props = InputWithoutOnChange & {
  label: string;
  onChange(value: string): void;
};

function TextInput({ onChange, label, ...rest }: Props) {
  return (
    <label>
      {label}
      <input onChange={(e) => onChange(e.target.value)} {...rest} />
    </label>
  );
}

export type { Props as TextInputProps };
export { TextInput };
