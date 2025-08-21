import react from "/react.svg";

import AppSidebar from "@/components/organisms/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import vite from "/vite.svg";

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen">
        <div className="flex h-full items-center justify-center">
          <img src={vite} />
          <img src={react} />
        </div>
      </main>
    </SidebarProvider>
  );
}
