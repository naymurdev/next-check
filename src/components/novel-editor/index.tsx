"use client";
import { Editor } from "novel";
import type { Editor as TipTapEditor } from "@tiptap/core";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { defaultEditorContent } from "../ui/content";
import useLayoutStore from "../store";

export default function NovelEditor() {
  const layoutValue = useLayoutStore((state) => state.value);
  const [content, setContent] = useState<string>();
  console.log(content);
  // const handleOnUpdate = (editor: TipTapEditor) => {
  //   editor.getHTML();
  //   editor.getJSON();
  //   editor.getText();
  // };
  return (
    <div
      className={`relative w-full h-full  ${
        layoutValue === "both"
          ? "col-span-4 grid"
          : layoutValue === "note"
          ? "col-span-12 grid"
          : "col-span-0 hidden"
      }`}>
      <ScrollArea className="2xl:h-[94vh] h-[92vh] rounded-md dark:border-base-dark p-2">
        <Editor
          disableLocalStorage={false}
          defaultValue={defaultEditorContent}
          className="relative w-full  bg-white 2xl:mb-[calc(20vh)] dark:bg-base-dark  border-none "
          onDebouncedUpdate={(editor?: TipTapEditor) => {
            setContent(editor?.getHTML());
          }}
        />
      </ScrollArea>
    </div>
  );
}
