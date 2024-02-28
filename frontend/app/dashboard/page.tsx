import Header from "@/components/Header";
import PageContent from "./components/PageContent";

export default function Dashboard() {

  return (
    <div
      className="
        bg-neutral-900/95 
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
