"use client";

import { useLoadScript } from "@react-google-maps/api";
import Navbar from "@/components/navbar";
import Map from "@/components/Map";

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
      <Map lat={34.25453805169052} lng={35.65980556808268} />
    </>
  );
}
