"use client";

import { useEffect } from "react";

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable Right-Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable common developer keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
      }
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
      // Cmd+Option+I (Mac DevTools)
      if (e.metaKey && e.altKey && e.key === "i") {
        e.preventDefault();
      }
    };

    // Prevent drag and drop of images
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return <>{children}</>;
}
