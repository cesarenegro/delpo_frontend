"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function NetworkMap({ offices, order, active, onSelect }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const [status, setStatus] = useState(MAPBOX_TOKEN ? "loading" : "no-token");

  useEffect(() => {
    if (!MAPBOX_TOKEN || !containerRef.current || mapRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [95, 28],
      zoom: 2.6,
      attributionControl: false,
      cooperativeGestures: true,
    });
    mapRef.current = map;

    map.addControl(new mapboxgl.AttributionControl({ compact: true }));
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      setStatus("ready");
      try {
        map.setPaintProperty("water", "fill-color", "#14161a");
        map.setPaintProperty("land", "background-color", "#1d2025");
      } catch (e) {}
    });

    map.on("error", (e) => {
      console.error("Mapbox error:", e?.error || e);
      setStatus("error");
    });

    order.forEach((key) => {
      const o = offices[key];
      const el = document.createElement("button");
      el.setAttribute("aria-label", `${o.name} office`);
      el.className = "delpo-pin";
      el.innerHTML = `<span class="delpo-pin-core"></span>`;
      el.addEventListener("click", () => onSelect(key));

      const marker = new mapboxgl.Marker({ element: el, anchor: "center" })
        .setLngLat([o.lng, o.lat])
        .addTo(map);

      markersRef.current[key] = { marker, el };
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // reflect active state on pins + fly to it
  useEffect(() => {
    Object.entries(markersRef.current).forEach(([key, { el }]) => {
      el.classList.toggle("is-active", key === active);
    });
    if (mapRef.current && offices[active]) {
      mapRef.current.flyTo({
        center: [offices[active].lng, offices[active].lat],
        zoom: mapRef.current.getZoom() < 3 ? 4 : mapRef.current.getZoom(),
        speed: 0.8,
        essential: true,
      });
    }
  }, [active, offices]);

  if (!MAPBOX_TOKEN) {
    return (
      <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center text-center p-8 gap-3">
        <p className="eyebrow text-racered">Map unavailable</p>
        <p className="text-signal text-sm max-w-xs">
          Set <code className="mono text-paper">NEXT_PUBLIC_MAPBOX_TOKEN</code> in your
          environment to enable the live network map.
        </p>
      </div>
    );
  }

  return (
    <>
      <div ref={containerRef} className="absolute inset-0" />
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="eyebrow text-signaldim">Loading map…</p>
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 gap-3 bg-graphite">
          <p className="eyebrow text-racered">Map failed to load</p>
          <p className="text-signal text-sm max-w-xs">
            Check that your Mapbox token is a public token (starts with{" "}
            <code className="mono text-paper">pk.</code>) and that this domain is allowed under
            the token&apos;s URL restrictions in your Mapbox account.
          </p>
        </div>
      )}
    </>
  );
}
