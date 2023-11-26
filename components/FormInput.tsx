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
          <span className="inline-flex items-center px-3 text-sm font-bold bg-accent">
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
          className="bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
        />
      </div>
    </div>
  );
}
