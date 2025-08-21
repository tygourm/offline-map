import { createFileRoute } from "@tanstack/react-router";

import AppMap from "@/components/atoms/app-map";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <AppMap />;
}
