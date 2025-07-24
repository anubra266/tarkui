"use client";

import { Editable } from "@ark-ui/react/editable";
import { User, Check, X, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ProfileField() {
  const [value, setValue] = useState("johndoe@example.com");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleValueChange = (details: { value: string }) => {
    setValue(details.value);
    setIsValid(validateEmail(details.value));
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <User className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Profile Settings
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Update your account information
            </p>
          </div>
        </div>

        <Editable.Root
          placeholder="Enter your email..."
          value={value}
          onValueChange={handleValueChange}
          invalid={!isValid}
        >
          <Editable.Label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address
          </Editable.Label>
          <div className="flex items-center space-x-2">
            <Editable.Area className="flex-1">
              <Editable.Input
                className={`w-full px-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors min-h-[2.5rem] ${
                  !isValid
                    ? "border-red-300 dark:border-red-600 focus:ring-red-500 dark:focus:ring-red-400"
                    : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400"
                }`}
              />
              <Editable.Preview
                className={`w-full px-3 py-2 text-sm border border-transparent rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-600 cursor-text transition-colors min-h-[2.5rem] ${
                  !isValid ? "ring-1 ring-red-200 dark:ring-red-800" : ""
                }`}
              />
            </Editable.Area>
            <Editable.Context>
              {(editable) => (
                <Editable.Control className="flex items-center space-x-1">
                  {editable.editing ? (
                    <>
                      <Editable.SubmitTrigger
                        disabled={!isValid}
                        className={`p-1.5 rounded-md transition-colors ${
                          isValid
                            ? "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20"
                            : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                        }`}
                      >
                        <Check className="h-4 w-4" />
                      </Editable.SubmitTrigger>
                      <Editable.CancelTrigger className="p-1.5 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
                        <X className="h-4 w-4" />
                      </Editable.CancelTrigger>
                    </>
                  ) : null}
                </Editable.Control>
              )}
            </Editable.Context>
          </div>
          {!isValid && (
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">
              Please enter a valid email address
            </p>
          )}
        </Editable.Root>
      </div>
    </div>
  );
}
