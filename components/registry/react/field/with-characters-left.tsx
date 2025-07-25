"use client";

import { Field } from "@ark-ui/react/field";
import { useState } from "react";

export default function InputWithCharactersLeft() {
  const [value, setValue] = useState("Hello");
  const maxLength = 20;
  const charactersLeft = maxLength - value.length;

  return (
    <Field.Root className="max-w-sm w-full">
      <Field.Label className="text-sm font-medium text-gray-900 dark:text-gray-100">
        Project Name
      </Field.Label>
      <Field.Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        placeholder="Enter project name"
        className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
      />
      <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        {charactersLeft} characters left
      </div>
    </Field.Root>
  );
}
