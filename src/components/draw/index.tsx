"use client";
import React from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

function Drawindex() {
  return (
    <div className="h-screen ">
      {/* <Excalidraw /> */}
      <Tldraw />
    </div>
  );
}

export default Drawindex;
