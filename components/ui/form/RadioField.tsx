import type { ChangeEvent } from "react";

import { Field } from "./Field";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface RadioFieldProps {
  name: string;
  label?: string;
  error?: string;
  description?: string;
  required?: boolean;
  value?: string;
  options: RadioOption[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function RadioField({
  name,
  label,
  error,
  description,
  required = false,
  value,
  options,
  onChange,
}: RadioFieldProps) {
  return (
    <Field
      label={label}
      error={error}
      description={description}
      required={required}
    >
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-xl
              border
              border-border1
              bg-bg2
              px-3
              py-3
              transition
              hover:border-primary
            "
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={option.disabled}
              onChange={onChange}
              className="size-4 accent-primary"
            />

            <span className="text-sm text-text-primary">{option.label}</span>
          </label>
        ))}
      </div>
    </Field>
  );
}
