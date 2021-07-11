import block from "bem-cn-lite";
import "./index.scss";

type Props = {
  error?: string;
};

const b = block("form-error");

function FormError({ error }: Props) {
  return error !== undefined ? <div className={b()}>{error}</div> : null;
}
export { FormError };
