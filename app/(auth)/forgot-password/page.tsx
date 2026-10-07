import AuthShell from "@/components/auth/AuthShell";
import AuthCard from "@/components/auth/AuthCard";
import ForgotPasswordForm from "@/components/auth/ForgetPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthShell>
      <AuthCard>
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl border border-border1 bg-bg3">
            🔑
          </div>

          <h1 className="text-2xl font-semibold">Forgot your password?</h1>

          <p className="mt-2 text-sm text-text-muted">
            Enter your email and we'll send you a reset link.
          </p>
        </div>

        <ForgotPasswordForm />
      </AuthCard>
    </AuthShell>
  );
}
