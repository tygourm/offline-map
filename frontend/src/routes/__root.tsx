import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import AppSidebar from "@/components/organisms/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full h-screen">
          <Outlet />
        </main>
      </SidebarProvider>
      <TanStackRouterDevtools />
    </>
  );
}
