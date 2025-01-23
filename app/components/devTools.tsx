"use client";
import { useEffect, useState } from "react";
import { changeColor, getHtmlTags, handlechange, resetColor } from "../utils";

export default function DevTools() {
  const [htmlContent, setHtmlContent] = useState<[HTMLElement, string][]>([]);

  useEffect(() => {
    const updateHtmlContent = () => {
      const element = document.querySelector(".home");
      if (element instanceof HTMLElement) {
        setHtmlContent(getHtmlTags(element));
      }
    };

    updateHtmlContent();

    const observer = new MutationObserver(updateHtmlContent);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-50 h-1vh bg-black">
      <pre
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          padding: "1rem",
        }}
      >
        <div className="text-3xl items-center justify-center flex">
          Devtools
        </div>
        <div className="mr-10">Double click to edit</div>
        <br />
        {htmlContent.map((e, i) => (
          <div
            key={i}
            id={i.toString()}
            className="flex flex-column"
            onMouseEnter={() => changeColor(i, htmlContent)}
            onMouseLeave={() => resetColor(i, htmlContent)}
            onDoubleClick={() => handlechange(i, htmlContent)}
          >
            {e[1]}
          </div>
        ))}
      </pre>
    </div>
  );
}
