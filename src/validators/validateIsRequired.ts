export function validateIsRequired(value: string) {
  return value ? "" : "The field is required";
}
