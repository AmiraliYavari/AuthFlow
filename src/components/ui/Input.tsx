import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type, className = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm text-zinc-300">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            type={
              isPassword
                ? showPassword
                  ? "text"
                  : "password"
                : type
            }
            className={`
              w-full
              rounded-xl
              border
              border-zinc-700
              bg-zinc-900
              px-4
              py-3
              pr-14
              text-white
              outline-none
              transition
              focus:border-blue-500
              ${className}
            `}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-zinc-400"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
        </div>

        {error && (
          <span className="text-sm text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;