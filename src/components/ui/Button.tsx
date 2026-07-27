import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}