import Link from "next/link";

import AuthShell from "@/components/auth/AuthShell";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthShell>
      <AuthCard>
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl border border-border1 bg-bg3">
            🔐
          </div>

          <h1 className="text-2xl font-semibold text-text-primary">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-text-muted">
            Sign in to continue to your life tracker.
          </p>
        </div>

        <LoginForm />

        <p className="mt-6 text-center text-xs text-text-subtle">
          By continuing, you agree to use this app responsibly.
        </p>
      </AuthCard>
    </AuthShell>
  );
}
