"use client";
import * as React from "react";
import { Github, Linkedin, Moon, Sun, Twitter } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useLayoutStore from "../store";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import ReactThemeToggleButton from "../ui/themeToggle";
const changeLayout = [
  { id: "note", name: "Note" },
  { id: "both", name: "Both" },
  { id: "canvas", name: "Canvas" },
];
const light = { background: "lightGray" };
const dark = { background: "black" };

function Header() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const [isDark, setDark] = React.useState(false);
  //   const theme = isDark ? dark : light;
  const checkingTheme = theme == "light" ? "dark" : "light";
  const noteValue = useLayoutStore((state) => state.value);
  //   console.log(noteValue);
  const changNoteLayout = useLayoutStore((state) => state.canvasValueChange);
  return (
    <>
      <header className="px-6 flex justify-between items-center relative 2xl:h-[6vh] h-[8vh] dark:bg-[#020817] border-b dark:border-[#020817]">
        <Image src="/logo.png" alt="logo" width={45} height={40} />
        <ul className="border-[1px] border-[#ddd] dark:border-[#3b3b3b] flex ">
          {changeLayout?.map((layout, index) => {
            return (
              <>
                <li
                  key={layout.id}
                  className={`p-2 px-3   cursor-pointer hover:bg-gray-50 ${
                    noteValue === layout.id
                      ? "bg-gray-50 dark:bg-[#302f3a]"
                      : "bg-gray-200 dark:bg-[#020817]"
                  }`}
                  onClick={() => changNoteLayout(layout.id)}>
                  {layout.name}
                </li>
              </>
            );
          })}
        </ul>

        <ReactThemeToggleButton
          isDark={isDark}
          invertedIconLogic
          onChange={() => setTheme(checkingTheme)}
        />
      </header>
    </>
  );
}

export default Header;
