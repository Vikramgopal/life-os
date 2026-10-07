import type { SelectHTMLAttributes } from "react";

import { ChevronDown } from "lucide-react";

import { Field } from "./Field";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  description?: string;
  required?: boolean;
  options: SelectOption[];
  placeholder?: string;
}

export function SelectField({
  id,
  label,
  error,
  description,
  required = false,
  options,
  placeholder = "Select an option",
  className = "",
  ...props
}: SelectFieldProps) {
  return (
    <Field
      label={label}
      htmlFor={id}
      error={error}
      description={description}
      required={required}
    >
      <div className="relative">
        <select
          {...props}
          id={id}
          aria-invalid={Boolean(error)}
          className={`
            h-11
            w-full
            appearance-none
            rounded-xl
            border
            bg-bg2
            px-3
            pr-10
            text-sm
            text-text-primary
            outline-none
            transition

            ${error ? "border-red-500" : "border-border1 focus:border-primary"}

            disabled:cursor-not-allowed
            disabled:opacity-50

            ${className}
          `}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-text-muted
          "
        />
      </div>
    </Field>
  );
}
