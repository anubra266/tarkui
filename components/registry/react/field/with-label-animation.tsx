import { Field } from "@ark-ui/react/field";

export default function InputWithLabelAnimation() {
  const id = "animated-email";

  return (
    <div className=" bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Field.Root className="max-w-sm w-full group relative">
        <Field.Label
          htmlFor={id}
          className="origin-start text-gray-500 dark:text-gray-400 group-focus-within:text-gray-900 dark:group-focus-within:text-gray-100 has-[+input:not(:placeholder-shown)]:text-gray-900 dark:has-[+input:not(:placeholder-shown)]:text-gray-100 absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
        >
          <span className="bg-white dark:bg-gray-800 inline-flex px-2">
            Animated email field
          </span>
        </Field.Label>
        <Field.Input
          id={id}
          type="email"
          placeholder=" "
          className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-transparent focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
        />
      </Field.Root>
    </div>
  );
}
