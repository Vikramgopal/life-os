import type { InputHTMLAttributes, ReactNode } from "react";

import { Field } from "./Field";

interface CheckboxFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: ReactNode;
  error?: string;
  description?: string;
  required?: boolean;
}

export function CheckboxField({
  id,
  label,
  error,
  description,
  required = false,
  className = "",
  ...props
}: CheckboxFieldProps) {
  return (
    <Field
      htmlFor={id}
      error={error}
      description={description}
      required={required}
    >
      <label
        htmlFor={id}
        className="
          flex
          cursor-pointer
          items-start
          gap-3
          select-none
        "
      >
        <input
          {...props}
          id={id}
          type="checkbox"
          aria-invalid={Boolean(error)}
          className={`
            mt-0.5
            size-4
            shrink-0
            cursor-pointer
            rounded
            border-border1
            accent-primary

            ${className}
          `}
        />

        <span className="text-sm text-text-primary">{label}</span>
      </label>
    </Field>
  );
}
