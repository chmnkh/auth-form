import block from "bem-cn-lite";

import { TextInput } from "../TextInput";
import { Checkbox } from "../Checkbox";
import { Button } from "../Button";
import { FormError } from "../FormError";

import "./index.scss";

type FormState = {
  email: string;
  password: string;
  dontRemember: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string[]>>;

type Props = {
  formState: FormState;
  isRequesting: boolean;
  errors: FormErrors;
  submitError?: string;
  onResetErrors(field: keyof FormState): void;
  onChange(state: FormState): void;
  onSubmit(state: FormState): void;
};

const b = block("auth-form");

function AuthForm({
  formState,
  onChange,
  isRequesting,
  onSubmit,
  submitError,
  errors,
  onResetErrors,
}: Props) {
  const { email, password, dontRemember } = formState;

  return (
    <form className={b()} onSubmit={handleFormSubmit} noValidate>
      <TextInput
        label="email"
        value={email}
        onChange={makeOnChange("email")}
        error={errors.email?.[0]}
        disabled={isRequesting}
        type="email"
      />
      <TextInput
        label="password"
        value={password}
        onChange={makeOnChange("password")}
        error={errors.password?.[0]}
        disabled={isRequesting}
        type="password"
      />
      <Checkbox
        checked={dontRemember}
        onChange={makeOnChange("dontRemember")}
        disabled={isRequesting}
        label="Don't remember me"
      />
      <Button type="submit" showPreloader={isRequesting}>
        Sign in
      </Button>
      <FormError error={submitError} />
    </form>
  );

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(formState);
  }

  function makeOnChange<T extends keyof FormState>(field: T) {
    return (value: FormState[T]) => {
      if (errors[field]?.length) {
        onResetErrors(field);
      }
      onChange({ ...formState, [field]: value });
    };
  }
}

export type { FormState as AuthFormState, FormErrors as AuthFormErrors };
export { AuthForm };
