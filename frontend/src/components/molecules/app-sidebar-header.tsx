import { Link } from "@tanstack/react-router";

import AppLogo from "@/components/atoms/app-logo";
import { ModeToggle } from "@/components/atoms/mode-toggle";
import { Button } from "@/components/ui/button";
import { SidebarHeader } from "@/components/ui/sidebar";

export default function AppSidebarHeader() {
  return (
    <SidebarHeader>
      <Link to="/">
        <Button variant="ghost" size="icon">
          <AppLogo />
        </Button>
      </Link>
      <ModeToggle />
    </SidebarHeader>
  );
}
