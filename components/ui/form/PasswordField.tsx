"use client";

import { useState, type InputHTMLAttributes } from "react";

import { Eye, EyeOff, Lock } from "lucide-react";

import { Field } from "./Field";

interface PasswordFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
  error?: string;
  description?: string;
  required?: boolean;
}

export function PasswordField({
  id,
  label = "Password",
  error,
  description,
  required = false,
  className = "",
  ...props
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Field
      label={label}
      htmlFor={id}
      error={error}
      description={description}
      required={required}
    >
      <div className="relative">
        <Lock
          size={17}
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-text-muted
          "
        />

        <input
          {...props}
          id={id}
          type={showPassword ? "text" : "password"}
          aria-invalid={Boolean(error)}
          className={`
            h-11
            w-full
            rounded-xl
            border
            bg-bg2
            pl-10
            pr-11
            text-sm
            text-text-primary
            outline-none
            transition
            placeholder:text-text-muted

            ${error ? "border-red-500" : "border-border1 focus:border-primary"}

            disabled:cursor-not-allowed
            disabled:opacity-50

            ${className}
          `}
        />

        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-text-muted
            transition
            hover:text-text-primary
          "
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </Field>
  );
}
