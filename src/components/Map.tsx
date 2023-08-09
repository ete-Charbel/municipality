import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
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
