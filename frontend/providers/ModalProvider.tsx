"use client";

import AuthModal from "@/components/AuthModal";

interface ModalProviderProps {}

const ModalProvider: React.FC<ModalProviderProps> = ({}) => {
  return (
    <>
      <AuthModal />
    </>
  );
}

export default ModalProvider;