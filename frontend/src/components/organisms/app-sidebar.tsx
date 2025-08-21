import AppSidebarFooter from "@/components/molecules/app-sidebar-footer";
import AppSidebarHeader from "@/components/molecules/app-sidebar-header";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

export default function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <SidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
}
