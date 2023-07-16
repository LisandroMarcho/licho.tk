import type { Dispatch, SetStateAction } from "react";

type FormInputProps = {
  id: string;
  label: string;
  value: string;
  tag?: boolean;
  required?: boolean;
  placeholder?: string;
  type?: "url" | "text";
  setValue: Dispatch<SetStateAction<any>>;
};

export default function FormInput({
  id,
  label,
  value,
  setValue,
  tag = false,
  type = "url",
  placeholder = "",
  required = false,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <div className="flex">
        {tag && (
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            licho.tk/go/
          </span>
        )}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`rounded-lg ${
            tag && "rounded-l-none"
          } bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      </div>
    </div>
  );
}
