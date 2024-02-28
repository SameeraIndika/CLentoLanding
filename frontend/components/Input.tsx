import { forwardRef, useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          className={twMerge(
            `
          flex 
          w-full 
          rounded-md 
          bg-neutral-50/10
          border
          border-neutral-50
          px-3 
          py-3 
          text-sm
          text-neutral-50
          focus:text-neutral-600
          file:border-0 
          file:bg-transparent 
          file:text-sm 
          file:font-medium 
          placeholder:text-neutral-200 
          disabled:cursor-not-allowed 
          disabled:opacity-50
          focus:outline-none
          focus:border-cyan-400
          focus:bg-neutral-200
        `,
            disabled && "opacity-75",
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <RxEyeClosed className="h-5 w-5" />
            ) : (
              <RxEyeOpen className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
