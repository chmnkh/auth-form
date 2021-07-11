type Props = {
  checked: boolean;
  label: string;
  onChange(value: boolean): void;
};

function Checkbox({ checked, onChange, label }: Props) {
  return (
    <label>
      <input
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        type="checkbox"
      />
      {label}
    </label>
  );
}

export { Checkbox };
