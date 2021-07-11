import block from "bem-cn-lite";
import "./index.scss";

const b = block("checkbox");

type Props = {
  checked: boolean;
  label: string;
  disabled: boolean;
  onChange(value: boolean): void;
};

function Checkbox({ checked, onChange, label, disabled }: Props) {
  return (
    <label className={b()}>
      <input
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        type="checkbox"
      />
      {label}
    </label>
  );
}

export { Checkbox };
