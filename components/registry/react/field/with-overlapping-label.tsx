import { Field } from "@ark-ui/react/field";

export default function InputWithOverlappingLabel() {
  return (
    <div className=" bg-white dark:bg-gray-800 w-full px-4 py-12 rounded-xl flex items-center justify-center">
      <Field.Root className="max-w-sm w-full group relative">
        <Field.Label className="origin-start text-gray-500 dark:text-gray-400 group-focus-within:text-gray-900 dark:group-focus-within:text-gray-100 absolute block -translate-y-1/2 px-1 transition-all pointer-events-none top-0 cursor-default text-xs font-medium">
          <span className="bg-white dark:bg-gray-800 inline-flex px-2">
            Overlapping label
          </span>
        </Field.Label>
        <Field.Input
          type="email"
          placeholder="Email"
          className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
        />
      </Field.Root>
    </div>
  );
}
