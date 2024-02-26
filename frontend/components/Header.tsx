"use client";

import { twMerge } from "tailwind-merge";
import { RxCube } from "react-icons/rx";
import useAuthModal from "@/hooks/useAuthModal";
import Button from "./Button";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const authModal = useAuthModal();

  return (
    <div
      className={twMerge(
        `
        h-fit 
        bg-gradient-to-b 
        from-neutral-900 
        mx-auto
        py-6
        px-12
        `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="md:flex gap-x-2 items-center">
          <button
            className="
              flex 
              items-center 
              justify-center 
              gap-2
              cursor-pointer 
              hover:opacity-90 
              transition
            "
          >
            <RxCube className="text-white" size={35} />
            <span className="text-xl font-medium">CLento</span>
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div>
            <Button
              onClick={authModal.onOpen}
              className="
                bg-sky-900 
                text-neutral-50 
                font-medium
                px-6
                py-2
              "
            >
              Sign up
            </Button>
          </div>
          <div>
            <Button
              onClick={authModal.onOpen}
              className="
                bg-neutral-50 
                font-medium 
                px-6 
                py-2
              "
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
