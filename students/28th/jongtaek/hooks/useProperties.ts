import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { map, CustomMarker } from "./useGoogleMap";
import { Welcome, Feature } from "types/model";

interface Props {
  setMarkers: Dispatch<SetStateAction<CustomMarker[]>>;
  searchStoreDetail: (keyword: string) => void;
}

export const useProperties = ({ setMarkers, searchStoreDetail }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const { features }: Welcome = await fetch("/api/markers").then((res) =>
        res.json()
      );
      const markers = features.map(makeMarker);

      setMarkers(markers);
      setIsLoading(false);

      function makeMarker(property: Feature) {
        const [lng, lat] = property.geometry.coordinates;
        const marker = new google.maps.Marker({
          position: { lat, lng },
          map,
        });

        marker.addListener("click", clickMarker);

        return { marker, property };

        function clickMarker() {
          map!.setCenter(marker.getPosition() as google.maps.LatLng);
          searchStoreDetail(property.properties.name);
        }
      }
    })();
  }, []);

  return { isLoading };
};
