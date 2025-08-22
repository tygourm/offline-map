import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

import { useResolvedTheme } from "@/hooks/use-resolved-theme";

export default function AppMap() {
  const resolvedTheme = useResolvedTheme();

  return (
    <Map
      initialViewState={{
        latitude: 48.39052761664317,
        longitude: -4.4860074105817,
        zoom: 10,
      }}
      mapStyle={
        resolvedTheme === "dark"
          ? `${import.meta.env.VITE_TILESERVER_URL}/styles/dark/style.json`
          : `${import.meta.env.VITE_TILESERVER_URL}/styles/light/style.json`
      }
      attributionControl={false}
    >
      <ScaleControl position="top-right" />
      <ScaleControl position="top-right" unit="imperial" />
      <ScaleControl position="top-right" unit="nautical" />
      <FullscreenControl />
      <NavigationControl />
      <GeolocateControl />
    </Map>
  );
}
