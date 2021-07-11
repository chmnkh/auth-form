import { useState } from "react";
import { AuthForm, AuthFormState } from "../AuthForm";
import * as AuthAPI from "../../api/auth";

function AuthPage() {
  const [isRequesting, setIsRequesting] = useState(false);
  const [authFormState, setAuthFormState] = useState<AuthFormState>({
    email: "",
    password: "",
    dontRemember: false,
  });

  return (
    <AuthForm
      formState={authFormState}
      onChange={setAuthFormState}
      onSubmit={handleSubmit}
      isRequesting={isRequesting}
    />
  );

  // Normally (in a big project, where managing complexity is more important)
  // I wouldn't import & call API in a component directly.
  // Instead, I'd handle that in a separate layer of the app.
  // Components would just mostly render something and that's all they do & know.
  // Here I don't do that to not overcomplicate things.

  async function handleSubmit(state: AuthFormState) {
    setIsRequesting(true);
    try {
      await AuthAPI.login(state.email, state.password, state.dontRemember);
    } catch (err) {
      alert(err);
    } finally {
      setIsRequesting(false);
    }
  }
}

export { AuthPage };
