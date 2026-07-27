import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        w-full
        rounded-xl
        bg-blue-600
        px-4
        py-3
        font-semibold
        text-white
        transition
        hover:bg-blue-700
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}