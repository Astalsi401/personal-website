import { updateStore, useAppDispatch } from "@store";
import { clsx, isActive } from "@functions";

type HamburgerProps = { sidebarActive: boolean; btnRef: React.RefObject<HTMLAnchorElement | null> };

export const Hamburger: React.FC<HamburgerProps> = ({ sidebarActive, btnRef }) => {
  const dispatch = useAppDispatch();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(updateStore({ sidebarActive: !sidebarActive }));
  };
  return (
    <a href="#" className={clsx("hamburger d-flex justify-content-center align-items-center position-absolute", isActive(sidebarActive))} onClick={handleClick} ref={btnRef}>
      <span />
    </a>
  );
};
