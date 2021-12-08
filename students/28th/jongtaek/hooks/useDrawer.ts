import { useRecoilState } from "recoil";
import { drawerState } from "store/drawer/atom";

export const useDrawer = () => {
  const [isDrawerOpen, dispatch] = useRecoilState(drawerState);

  const handleDrawerOpen = (status: boolean) => {
    dispatch(status);
  };

  return { isDrawerOpen, handleDrawerOpen };
};
