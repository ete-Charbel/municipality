import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map(props: any) {
  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);

  return (
    <div className="flex justify-center py-10">
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
