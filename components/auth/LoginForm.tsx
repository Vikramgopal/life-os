"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import { loginSchema } from "@/lib/validations/auth";
import type { LoginFormValues } from "@/types/auth";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClient();

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setServerError("");

    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      setServerError("Invalid email or password.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email */}
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
            className="
              input
              w-full
              pl-10
            "
          />
        </div>

        {errors.email && (
          <p className="mt-1.5 text-sm text-danger">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block text-sm font-medium text-text-secondary">
          Password
        </label>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />

          <input
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Enter your password"
            {...register("password")}
            className="input w-full pl-10 pr-10"
          />

          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-text-muted
              transition
              hover:text-text-primary
            "
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="mt-1.5 text-sm text-danger">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Forgot */}
      <div className="flex justify-end">
        <Link
          href="/forgot-password"
          className="text-sm text-primary transition hover:text-primary-hover"
        >
          Forgot password?
        </Link>
      </div>

      {/* Server error */}
      {serverError && (
        <div className="rounded-lg border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
          {serverError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          btn
          btn-primary
          flex
          w-full
          items-center
          justify-center
          gap-2
        "
      >
        <LogIn className="size-4" />

        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>

      {/* Signup */}
      <p className="text-center text-sm text-text-muted">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary hover:text-primary-hover"
        >
          Create account
        </Link>
      </p>
    </form>
  );
}
