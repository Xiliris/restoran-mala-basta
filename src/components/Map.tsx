import { FC, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 43.85428797740061,
  lng: 18.376620367480758,
};

const Map: FC = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAX0ePeW-44NQvzTRQR3QA8qFE_IziOnDw",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    console.log("Map loaded", map);
    map.setZoom(19);
    map.setCenter(center);
    map.setMapTypeId("satellite");
    setMap(map);

    // Create a new marker
    const newMarker = new google.maps.Marker({
      position: center,
      map,
      title: "Hello World!",
    });
    setMarker(newMarker);
  }, []);

  const onUnmount = useCallback(() => {
    console.log("Map unmounted");
    setMap(null);
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={19}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {marker && <Marker position={center} />}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default Map;
