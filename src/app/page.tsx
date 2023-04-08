import Center from "./components/Center";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen">
      <main className="flex relative">
        <Sidebar></Sidebar>
        <Center></Center>
      </main>
    </div>
  );
}
