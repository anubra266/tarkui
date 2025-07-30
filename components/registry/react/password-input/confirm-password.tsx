"use client";

import { Field } from "@ark-ui/react/field";
import { PasswordInput } from "@ark-ui/react/password-input";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { useState } from "react";

export default function ConfirmPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;
  const showMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  return (
    <div className="flex items-center justify-center min-h-32">
      <div className="w-72 space-y-4">
        <Field.Root>
          <PasswordInput.Root autoComplete="new-password">
            <PasswordInput.Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
              Password
            </PasswordInput.Label>
            <PasswordInput.Control className="relative h-9 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all">
              <PasswordInput.Input
                className="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 pr-10 border-none outline-hidden focus:outline-hidden focus-visible:outline-hidden"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <PasswordInput.VisibilityTrigger className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                <PasswordInput.Indicator
                  fallback={<EyeOff className="w-4 h-4" />}
                >
                  <Eye className="w-4 h-4" />
                </PasswordInput.Indicator>
              </PasswordInput.VisibilityTrigger>
            </PasswordInput.Control>
          </PasswordInput.Root>
        </Field.Root>

        <Field.Root invalid={showMismatch}>
          <PasswordInput.Root autoComplete="new-password">
            <PasswordInput.Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              Confirm Password
              {passwordsMatch && <Check className="w-4 h-4 text-green-500" />}
              {showMismatch && <X className="w-4 h-4 text-red-500" />}
            </PasswordInput.Label>
            <PasswordInput.Control className="relative h-9 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 dark:focus-within:ring-blue-400/50 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-all data-invalid:border-red-500 dark:data-invalid:border-red-400 data-invalid:focus-within:ring-red-500/50 dark:data-invalid:focus-within:ring-red-400/50">
              <PasswordInput.Input
                className="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 pr-10 border-none outline-hidden focus:outline-hidden focus-visible:outline-hidden"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <PasswordInput.VisibilityTrigger className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                <PasswordInput.Indicator
                  fallback={<EyeOff className="w-4 h-4" />}
                >
                  <Eye className="w-4 h-4" />
                </PasswordInput.Indicator>
              </PasswordInput.VisibilityTrigger>
            </PasswordInput.Control>
          </PasswordInput.Root>

          <Field.ErrorText className="text-xs text-red-600 dark:text-red-400 mt-2">
            Passwords do not match
          </Field.ErrorText>

          {passwordsMatch && (
            <Field.HelperText className="text-xs text-green-600 dark:text-green-400 mt-2">
              Passwords match!
            </Field.HelperText>
          )}
        </Field.Root>
      </div>
    </div>
  );
}
