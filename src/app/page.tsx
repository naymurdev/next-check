import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import NovelEditor from "@/components/novel-editor";
import dynamic from "next/dynamic";
import Header from "@/components/common/header";
const Drawindex = dynamic(() => import("@/components/draw"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-12 dark:bg-base-dark h-[90vh]">
        <NovelEditor />
        <Drawindex />
      </main>
    </>
  );
}
