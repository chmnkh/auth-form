const CORRECT_USER = {
  email: "e@ma.il",
  password: "Qwe_123",
};

type SuccessResponse = "Success";

async function login(email: string, password: string, _: boolean) {
  // server response
  const response = await new Promise<SuccessResponse>((resolve, reject) => {
    const isCorrectUser =
      CORRECT_USER.email === email && CORRECT_USER.password === password;
    setTimeout(
      () =>
        isCorrectUser ? resolve("Success") : reject("Wrong email or password"),
      1000
    );
  });

  return response;
}

export { login };
