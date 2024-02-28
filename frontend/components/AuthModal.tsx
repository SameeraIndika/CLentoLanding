import React, { useEffect, useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import useAuthModal from "@/hooks/useAuthModal";

import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";

const AuthModal = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const handleToggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "demo@clento.com" && password === "Demo@1234") {
      onClose();

      toast.success("Login successful! Redirecting to dashboard...");

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } else {
      toast.error("Invalid email or password. Please try again.");
    }
  };


  return (
    <Modal
      title="Welcome!"
      description={
        isSignUp
          ? "Sign up for your CLento account."
          : "Login to your CLento account."
      }
      isOpen={isOpen}
      onChange={onChange}
    >
      <div className="border-b-2 border-neutral-100/10 mb-8"></div>
      <form
        id="login_form"
        onSubmit={handleSubmit}
        className="flex flex-col justify-center space-y-6"
      >
        <div className="space-y-2">
          <Label name="Email address" />
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label name="Password" />
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {isSignUp && (
          <div className="space-y-2">
            <Label name="Confirm password" />
            <Input type="password" />
          </div>
        )}
        <div className="pt-6">
          <Button
            type="submit"
            className="
              bg-sky-900 
              border-cyan-400
              text-slate-200
              hover:bg-cyan-400
              font-medium 
              px-6 
              py-2
            "
          >
            {isSignUp ? "Sign up" : "Login"}{" "}
          </Button>
        </div>
        <div className="flex flex-col justify-between items-center space-y-2">
          <div>
            <a
              href="#"
              className="text-sm text-center underline underline-offset-2 font-medium text-neutral-200"
            >
              Forgot your password?
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-sm text-center underline underline-offset-2 font-medium text-neutral-200"
              onClick={handleToggleForm}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign up"}{" "}
            </a>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AuthModal;
