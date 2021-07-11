import { TextInput } from "../TextInput";
import { Checkbox } from "../Checkbox";
import { Button } from "../Button";

type FormState = {
  email: string;
  password: string;
  dontRemember: boolean;
};

type Props = {
  formState: FormState;
  onChange(state: FormState): void;
  onSubmit(state: FormState): void;
};

function AuthForm({ formState, onChange }: Props) {
  const { email, password, dontRemember } = formState;

  return (
    <form onSubmit={() => void 0}>
      <TextInput
        label="email"
        value={email}
        onChange={makeOnChange("email")}
        type="email"
      />
      <TextInput
        label="password"
        value={password}
        onChange={makeOnChange("password")}
        type="password"
      />
      <Checkbox
        checked={dontRemember}
        onChange={makeOnChange("dontRemember")}
        label="Don't remember"
      />
      <Button type="submit">Submit</Button>
    </form>
  );

  function makeOnChange<T extends keyof FormState>(field: T) {
    return (value: FormState[T]) => onChange({ ...formState, [field]: value });
  }
}

export type { FormState as AuthFormState };
export { AuthForm };
