import type { InputHTMLAttributes, ReactNode } from "react";

import { Field } from "./Field";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string;
  required?: boolean;
  leftIcon?: ReactNode;
}

export function InputField({
  id,
  label,
  error,
  description,
  required = false,
  leftIcon,
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <Field
      label={label}
      htmlFor={id}
      error={error}
      description={description}
      required={required}
    >
      <div className="relative">
        {leftIcon && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          >
            {leftIcon}
          </span>
        )}

        <input
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`
            h-11
            w-full
            rounded-xl
            border
            bg-bg2
            px-3
            text-sm
            text-text-primary
            outline-none
            transition
            placeholder:text-text-muted

            ${leftIcon ? "pl-10" : ""}

            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-border1 focus:border-primary"
            }

            disabled:cursor-not-allowed
            disabled:opacity-50

            ${className}
          `}
          {...props}
        />
      </div>
    </Field>
  );
}
