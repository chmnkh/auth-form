type Props = {
  checked: boolean;
  label: string;
  disabled: boolean;
  onChange(value: boolean): void;
};

function Checkbox({ checked, onChange, label, disabled }: Props) {
  return (
    <label>
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
