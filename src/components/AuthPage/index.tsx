import { useState } from "react";
import { AuthForm, AuthFormState } from "../AuthForm";

function AuthPage() {
  const [authFormState, setAuthFormState] = useState<AuthFormState>({
    email: "",
    password: "",
    dontRemember: false,
  });

  return (
    <AuthForm
      formState={authFormState}
      onChange={setAuthFormState}
      onSubmit={() => void 0}
    />
  );
}

export { AuthPage };
