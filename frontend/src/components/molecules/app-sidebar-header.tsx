import { Link } from "@tanstack/react-router";

import { ModeToggle } from "@/components/atoms/mode-toggle";
import { SidebarHeader } from "@/components/ui/sidebar";

import AppLogo from "../atoms/app-logo";
import { Button } from "../ui/button";

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
