import type { TextareaHTMLAttributes } from "react";

import { Field } from "./Field";

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  description?: string;
  required?: boolean;
}

export function TextareaField({
  id,
  label,
  error,
  description,
  required = false,
  className = "",
  ...props
}: TextareaFieldProps) {
  return (
    <Field
      label={label}
      htmlFor={id}
      error={error}
      description={description}
      required={required}
    >
      <textarea
        {...props}
        id={id}
        aria-invalid={Boolean(error)}
        className={`
          min-h-28
          w-full
          resize-y
          rounded-xl
          border
          bg-bg2
          px-3
          py-3
          text-sm
          text-text-primary
          outline-none
          transition
          placeholder:text-text-muted

          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-border1 focus:border-primary"
          }

          disabled:cursor-not-allowed
          disabled:opacity-50

          ${className}
        `}
      />
    </Field>
  );
}
