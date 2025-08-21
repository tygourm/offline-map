import react from "/react.svg";

import { SidebarFooter } from "@/components/ui/sidebar";

import heart from "/heart.svg";
import vite from "/vite.svg";

export default function AppSidebarFooter() {
  return (
    <SidebarFooter>
      <img src={heart} className="size-6" />
      <img src={vite} className="size-6" />
      <img src={react} className="size-6" />
    </SidebarFooter>
  );
}
