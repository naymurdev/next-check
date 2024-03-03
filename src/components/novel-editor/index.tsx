"use client";
import { Editor } from "novel";
import type { Editor as TipTapEditor } from "@tiptap/core";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { defaultEditorContent } from "../ui/content";

export default function NovelEditor() {
  const [content, setContent] = useState<string>();
  console.log(content);

  return (
    <div className="relative w-full h-full">
      <ScrollArea className="h-screen rounded-md border p-4">
        <Editor
          disableLocalStorage={false}
          // defaultValue={{
          //   type: "doc",
          //   content: [],
          // }}
          defaultValue={defaultEditorContent}
          className="relative w-full  border-stone-200 bg-white sm:mb-[calc(20vh)]  "
          onDebouncedUpdate={(editor?: TipTapEditor) => {
            setContent(editor?.getHTML());
          }}
        />
      </ScrollArea>
    </div>
  );
}
