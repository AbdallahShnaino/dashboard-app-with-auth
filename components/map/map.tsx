"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import classes from "./map.module.css";
export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
        version: "weekly",
      });
      const mapOptions: google.maps.MapOptions = {
        center: {
          lat: 34.46667,
          lng: 31.5,
        },
        zoom: 15,
      };
      const { Map } = await loader.importLibrary("maps");
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
    };
    initMap();
  }, []);
  return (
    <article className={classes.mapContainer}>
      <h3>Map Location </h3>
      <div className={classes.map} ref={mapRef}></div>
    </article>
  );
}
