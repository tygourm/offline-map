import { useResolvedTheme } from "@/hooks/use-resolved-theme";

import earthDark from "/earth-dark.svg";
import earthLight from "/earth-light.svg";

type AppLogoProps = {
  size?: number;
};

export default function AppLogo(props: AppLogoProps) {
  const resolvedTheme = useResolvedTheme();

  return (
    <img
      src={resolvedTheme === "dark" ? earthDark : earthLight}
      className={`size-${props.size || 6}`}
    />
  );
}
