import { TextInput } from "../TextInput";
import { Checkbox } from "../Checkbox";
import { Button } from "../Button";
import { FormError } from "../FormError";

type FormState = {
  email: string;
  password: string;
  dontRemember: boolean;
};

type Props = {
  formState: FormState;
  isRequesting: boolean;
  submitError?: string;
  onChange(state: FormState): void;
  onSubmit(state: FormState): void;
};

function AuthForm({
  formState,
  onChange,
  isRequesting,
  onSubmit,
  submitError,
}: Props) {
  const { email, password, dontRemember } = formState;

  return (
    <form onSubmit={handleFormSubmit}>
      <TextInput
        label="email"
        value={email}
        onChange={makeOnChange("email")}
        disabled={isRequesting}
        type="email"
      />
      <TextInput
        label="password"
        value={password}
        onChange={makeOnChange("password")}
        disabled={isRequesting}
        type="password"
      />
      <Checkbox
        checked={dontRemember}
        onChange={makeOnChange("dontRemember")}
        disabled={isRequesting}
        label="Don't remember"
      />
      <Button type="submit" showPreloader={isRequesting}>
        Submit
      </Button>
      <FormError error={submitError} />
    </form>
  );

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(formState);
  }

  function makeOnChange<T extends keyof FormState>(field: T) {
    return (value: FormState[T]) => onChange({ ...formState, [field]: value });
  }
}

export type { FormState as AuthFormState };
export { AuthForm };
