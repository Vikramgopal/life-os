"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail, Send } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import { forgotPasswordSchema } from "@/lib/validations/auth";
import type { ForgotPasswordFormValues } from "@/types/auth";

export default function ForgotPasswordForm() {
  const supabase = createClient();

  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    setServerError("");

    const redirectTo = `${window.location.origin}/reset-password`;

    const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo,
    });

    if (error) {
      setServerError("Unable to send reset email. Please try again.");
      return;
    }

    setSuccess(true);
  };

  if (success) {
    return (
      <div className="space-y-5 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-success/10 text-2xl">
          ✉️
        </div>

        <div>
          <h2 className="text-xl font-semibold">Check your email</h2>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            If an account exists for this email, you'll receive a password reset
            link.
          </p>
        </div>

        <Link
          href="/login"
          className="btn btn-secondary flex w-full items-center justify-center gap-2"
        >
          <ArrowLeft className="size-4" />
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-text-secondary">
          Email
        </label>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />

          <input
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            {...register("email")}
            className="input w-full pl-10"
          />
        </div>

        {errors.email && (
          <p className="mt-1.5 text-sm text-danger">{errors.email.message}</p>
        )}
      </div>

      {serverError && (
        <div className="rounded-lg border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary flex w-full items-center justify-center gap-2"
      >
        <Send className="size-4" />

        {isSubmitting ? "Sending..." : "Send reset link"}
      </button>

      <Link
        href="/login"
        className="flex items-center justify-center gap-2 text-sm text-text-muted hover:text-text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to sign in
      </Link>
    </form>
  );
}
