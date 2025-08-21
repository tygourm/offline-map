import react from "/react.svg";
import { createFileRoute } from "@tanstack/react-router";

import vite from "/vite.svg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex h-full items-center justify-center gap-2">
      <img src={vite} />
      <img src={react} />
    </div>
  );
}
