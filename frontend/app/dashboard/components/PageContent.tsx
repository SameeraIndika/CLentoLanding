"use client";

import Button from "@/components/Button";
import useAuthModal from "@/hooks/useAuthModal";

interface PageContentProps {}

const PageContent: React.FC<PageContentProps> = ({ }) => {
  
  const authModal = useAuthModal();
  
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl font-bold text-center">Dashboard</h1>
      <div className="w-full mt-8 px-6 py-12 rounded-lg md:w-4/3 lg:w-2/3 bg-neutral-800">
        <div className="font-md text-center text-neutral-200">
          Dashboard content here...
        </div>
      </div>
    </div>
  );
};

export default PageContent;
