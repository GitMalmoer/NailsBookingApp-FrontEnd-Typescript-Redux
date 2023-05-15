import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import React from "react";
import MainLoader from "../Common/MainLoader";

function MapToNails() {
  const googleMapsKey: string | undefined =
    process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleMapsKey!,
  });

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {

    return <MainLoader />;
  }

  const centerMap = { lat: 59.327238774652585, lng: 14.569809046915614 }
  return (
    <div className="map-container">
      <GoogleMap
        zoom={16}
        center= {centerMap}
        mapContainerStyle={{ height: "400px", width: "100%" }}
      >
        <MarkerF
          position={centerMap}
        ></MarkerF>
      </GoogleMap>
    </div>
  );
}

export default MapToNails;
