import { useState } from "react";
import block from "bem-cn-lite";

import { AuthForm, AuthFormErrors, AuthFormState } from "../AuthForm";
import * as AuthAPI from "../../../api/auth";
import { validateIsRequired } from "../../validators/validateIsRequired";
import { validateIsEmail } from "../../validators/validateIsEmail";

import "./index.scss";

const b = block("auth-page");

function AuthPage() {
  const [isRequesting, setIsRequesting] = useState(false);
  const [authFormState, setAuthFormState] = useState<AuthFormState>({
    email: "",
    password: "",
    dontRemember: false,
  });
  const [authFormErrors, setAuthFormErrors] = useState<AuthFormErrors>({});
  const [submitError, setSubmitError] = useState<string | undefined>(undefined);

  return (
    <div className={b()}>
      <div className={b("content")}>
        <h1 className={b("page-title")}>
          Sign in to
          <span className={b("app-name")} title="Somewhere">
            {" "}
            Куда-то
          </span>
        </h1>
        <div className={b("form")}>
          <AuthForm
            formState={authFormState}
            onChange={setAuthFormState}
            onSubmit={handleSubmit}
            isRequesting={isRequesting}
            submitError={submitError}
            errors={authFormErrors}
            onResetErrors={handleResetErrors}
          />
        </div>
      </div>
    </div>
  );

  // Normally (in a big project, where managing complexity is more important)
  // I wouldn't import & call API in a component directly.
  // Instead, I'd handle that in a separate layer of the app.
  // Components would just mostly render something and that's all they do & know.
  // Here I don't do that to not overcomplicate things.

  async function handleSubmit(state: AuthFormState) {
    const allErrors = validateForm(state);
    const isInvalid = Object.values(allErrors).some(
      (fieldErrors) => fieldErrors?.length
    );
    if (isInvalid) {
      setAuthFormErrors(allErrors);
    } else {
      setIsRequesting(true);
      setSubmitError(undefined);
      try {
        await AuthAPI.login(state.email, state.password, state.dontRemember);
      } catch (error) {
        setSubmitError(error);
      } finally {
        setIsRequesting(false);
      }
    }
  }

  function handleResetErrors(field: keyof AuthFormState) {
    setAuthFormErrors({ ...authFormErrors, [field]: [] });
  }
}

function validateForm({ email, password }: AuthFormState) {
  const errors: Partial<Record<keyof AuthFormState, string[]>> = {
    email: [validateIsRequired(email), validateIsEmail(email)].filter(Boolean),
    password: [validateIsRequired(password)].filter(Boolean),
  };

  return errors;
}

export { AuthPage };
