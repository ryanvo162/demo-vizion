import DemoBox from "@/components/DemoBox2";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen relative">
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="Logo"
        className="text-center bottom-1 right-4 absolute text-2xl font-bold mb-4 z-20"
      />
      <DemoBox />
    </div>
  );
}
