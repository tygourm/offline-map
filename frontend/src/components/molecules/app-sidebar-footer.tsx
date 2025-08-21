import react from "/react.svg";

import { SidebarFooter } from "@/components/ui/sidebar";

import vite from "/vite.svg";

export default function AppSidebarFooter() {
  return (
    <SidebarFooter>
      <img src={vite} />
      <img src={react} />
    </SidebarFooter>
  );
}
