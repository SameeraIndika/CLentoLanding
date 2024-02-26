import Header from "@/components/Header";
import PageContent from "./components/PageContent";

export default function Home() {

  return (
    <div
      className="
        bg-transparent 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
        absolute
      "
    >
      <Header />
      <div className="m-12 p-6">
        <PageContent />
      </div>
    </div>
  )
}
