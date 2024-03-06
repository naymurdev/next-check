"use client";
import React from "react";
import ReactDOM from "react-dom";

import { useEditor } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import useLayoutStore from "../store";
import dynamic from "next/dynamic";
import { getSvgAsImage } from "@/lib/getSvgAsImage";
import { blobToBase64 } from "@/lib/blobToBase64";
const Tldraw = dynamic(async () => (await import("@tldraw/tldraw")).Tldraw, {
  ssr: false,
});

function Drawindex() {
  const [html, setHtml] = React.useState<null | string>(null);

  const layoutValue = useLayoutStore((state) => state.value);
  return (
    <div
      className={`relative w-full  2xl:h-[94vh] h-[92vh] ${
        layoutValue === "both"
          ? "col-span-8 grid"
          : layoutValue === "note"
          ? "col-span-0 hidden"
          : "col-span-12 grid"
      }`}>
      {/* <Excalidraw /> */}
      {/* <button
        className="absolute bottom-10 z-[999] right-10 p-4 bg-black"
        onClick={() => {
          const snapshot = editor.store.getSnapshot();
          const stringified = JSON.stringify(snapshot);
          localStorage.setItem("my-editor-snapshot", stringified);
        }}>
        Save
      </button> */}
      <Tldraw persistenceKey="tldraw">
        {/* <ExportButton setHtml={setHtml} /> */}
        {/* <h1 className="absolute text-4xl z-[1000]">Hello</h1> */}
      </Tldraw>
    </div>
  );
}
function ExportButton({ setHtml }: { setHtml: (html: string) => void }) {
  const editor = useEditor();
  const [loading, setLoading] = React.useState(false);
  // A tailwind styled button that is pinned to the bottom right of the screen
  return (
    <button
      onClick={async (e) => {
        setLoading(true);

        try {
          e.preventDefault();

          const snapshot = editor.store.getSnapshot();
          const stringified = JSON.stringify(snapshot);
          // localStorage.setItem("my-editor-snapshot", stringified);
          console.log(stringified, snapshot);

          // const svg = await editor.getSvg(
          //   Array.from(editor.currentPageShapeIds)
          // );
          // if (!svg) {
          //   return;
          // }
          // const png = await getSvgAsImage(svg, {
          //   type: "png",
          //   quality: 1,
          //   scale: 1,
          // });
          // const dataUrl = await blobToBase64(png!);
          // console.log(dataUrl);

          // const resp = await fetch("/api/toHtml", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({ image: dataUrl }),
          // });

          // const json = await resp.json();

          // if (json.error) {
          //   alert("Error from open ai: " + JSON.stringify(json.error));
          //   return;
          // }

          // const message = json.choices[0].message.content;
          // const start = message.indexOf("<!DOCTYPE html>");
          // const end = message.indexOf("</html>");
          // const html = message.slice(start, end + "</html>".length);
          // setHtml(html);
        } finally {
          setLoading(false);
        }
      }}
      className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ="
      style={{ zIndex: 1000 }}
      disabled={loading}>
      {loading ? (
        <div className="flex justify-center items-center ">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        </div>
      ) : (
        "Make Real"
      )}
    </button>
  );
}

export default Drawindex;
