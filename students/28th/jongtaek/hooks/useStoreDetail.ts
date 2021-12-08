import { useRecoilState } from "recoil";
import { storeDetailState } from "store/storeDetail/atom";

export const useStoreDetail = () => {
  const [storeDetail, dispatch] = useRecoilState(storeDetailState);

  const handleStoreDetail = (payload: google.maps.places.PlaceResult) => {
    dispatch(payload);
  };

  return { storeDetail, handleStoreDetail };
};
