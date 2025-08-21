import react from "/react.svg";

import { SidebarFooter } from "@/components/ui/sidebar";

import fastapi from "/fastapi.svg";
import heart from "/heart.svg";
import protomaps from "/protomaps.svg";
import vite from "/vite.svg";

export default function AppSidebarFooter() {
  return (
    <SidebarFooter>
      <img src={heart} className="size-6" />
      <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
        <img src={vite} className="size-6" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={react} className="size-6" />
      </a>
      <a
        href="https://fastapi.tiangolo.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fastapi} className="size-6" />
      </a>
      <a href="https://protomaps.com" target="_blank" rel="noopener noreferrer">
        <img src={protomaps} className="size-6" />
      </a>
    </SidebarFooter>
  );
}
