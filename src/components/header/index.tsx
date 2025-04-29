import { useEffect, useRef } from "react";
import { updateStore, useAppDispatch, useAppSelector } from "@store";
import { Sidebar, SearchBar } from "@components";
import { HomePageLink } from "@ui/button";
import { SearchBtn } from "./search-btn";
import { Accessibility } from "./accessibility";
import { ProgressBar } from "./progress-bar";
import { DarkMode } from "./dark-mode";
import { Hamburger } from "./hamburger";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const sidebarActive = useAppSelector((state) => state.sidebarActive);
  const wrapperRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const handleFocusIn = ({ target }: FocusEvent) => {
    if (btnRef.current && target && btnRef.current.contains(target as HTMLElement)) return;
    wrapperRef.current && dispatch(updateStore({ sidebarActive: wrapperRef.current.contains(target as HTMLElement) }));
  };
  const handleClickOut = ({ target }: MouseEvent) => {
    if ((wrapperRef.current && wrapperRef.current.contains(target as HTMLElement)) || (btnRef.current && btnRef.current.contains(target as HTMLElement))) return;
    dispatch(updateStore({ sidebarActive: false }));
  };
  const handleClickFrame = ({ data }: MessageEvent) => data.window && data.window === "iframe" && dispatch(updateStore({ sidebarActive: false }));
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    document.addEventListener("pointerdown", handleClickOut, { signal });
    document.addEventListener("focusin", handleFocusIn, { signal });
    window.addEventListener("message", handleClickFrame, { signal });
    return () => controller.abort();
  }, []);
  return (
    <>
      <Accessibility />
      <header id="header" className="position-fixed w-100">
        <nav id="navbar" className="position-relative">
          <HomePageLink />
          <DarkMode />
          <SearchBtn />
          <Hamburger sidebarActive={sidebarActive} btnRef={btnRef} />
        </nav>
        <ProgressBar />
        <SearchBar />
        <Sidebar wrapperRef={wrapperRef} />
      </header>
    </>
  );
};
