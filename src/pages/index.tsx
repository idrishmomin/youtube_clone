import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import { LeftBar } from "@/components/LeftBar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-100">
    <AppBar />
    <div className="flex">
        <LeftBar />
        <VideoGrid />
      </div>
    </div>
  );
}
