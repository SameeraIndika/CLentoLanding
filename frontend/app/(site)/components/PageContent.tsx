"use client";

import Button from "@/components/Button";
import useAuthModal from "@/hooks/useAuthModal";

interface PageContentProps {}

const PageContent: React.FC<PageContentProps> = ({ }) => {
  
  const authModal = useAuthModal();
  
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-white text-4xl font-bold text-center">Welcome to CLento!</h1>
      <h4 className="mt-4 text-cyan-400 text-lg uppercase font-semibold text-center">Aenean viverra turpis sit amet ornare convallis.</h4>
      <div className="w-full md:w-4/3 lg:w-2/3">
        <div className="mt-6 font-md text-center text-neutral-200">
          Mauris aliquam semper odio, sed accumsan nulla efficitur id. Morbi ac
          vehicula ante. Nunc finibus, diam sit amet efficitur posuere, nisl sem
          accumsan arcu, eu scelerisque metus mi in justo. Aenean viverra,
          turpis sit amet ornare convallis, eget scelerisque massa urna a enim.
        </div>
      </div>
      <div className="mt-8">
        <Button onClick={authModal.onOpen} className="bg-cyan-400 px-6 py-3">
          Get started!
        </Button>
      </div>
    </div>
  );
};

export default PageContent;
