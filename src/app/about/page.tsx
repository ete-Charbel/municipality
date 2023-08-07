"use client";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Navbar from "@/components/navbar";

export default function Page() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) return;
  <>
    <Navbar />
    <div className="pl-5 py-5">Loading...</div>;
  </>;
  return (
    <>
      <Navbar />
    </>
  );
}

function Map() {
  const center = useMemo(
    () => ({ lat: 34.25453805169052, lng: 35.659344228157394 }),
    []
  );

  return (
    <div className="flex justify-center py-10">
      <GoogleMap
        zoom={13}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
