type Props = {
  error?: string;
};

function FormError({ error }: Props) {
  return error !== undefined ? <div>{error}</div> : null;
}
export { FormError };
