import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import store, { updateStore, useAppDispatch, useAppSelector } from "@store";
import { isActive } from "@functions";
import { Sidebar, SearchBar, SearchIcon } from "@components";
import type { HamburgerProps } from "@types";

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
          <Home />
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

const Accessibility: React.FC = () => {
  const sidebarAnchorID = useAppSelector((state) => state.sidebarAnchorID);
  const access = [
    { href: "#main-content", text: "Skip to main content" },
    { href: `#${sidebarAnchorID}`, text: "Skip to sidebar" },
  ];
  return (
    <div className="accessibility position-fixed">
      {access.map((a) => (
        <a key={a.text} href={a.href}>
          {a.text}
        </a>
      ))}
    </div>
  );
};

const ProgressBar: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);
  const handleScroll = () => {
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    setPercent(Number(((scrollTop / (scrollHeight - clientHeight)) * 100).toFixed(2)));
  };
  useEffect(() => {
    window.addEventListener("load", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div className="progress w-100 position-relative" style={{ "--percent": percent } as React.CSSProperties} />;
};

const Home: React.FC = () => (
  <Link to={import.meta.env.BASE_URL} className="home d-block position-absolute">
    <svg viewBox="0 0 500 500">
      <path d="M250 100 L450 230,350 230,350 400,150 400,150 230,50 230,250 100" />
    </svg>
  </Link>
);

const DarkMode: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.isDark);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.setItem("isDark", String(!isDark));
    document.body.setAttribute("data-theme", !isDark ? "dark" : "light");
    dispatch(updateStore({ isDark: !isDark }));
  };
  useEffect(() => {
    const userIsDark = localStorage.getItem("isDark") ? localStorage.getItem("isDark") === "true" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    localStorage.setItem("isDark", String(userIsDark));
    document.body.setAttribute("data-theme", userIsDark ? "dark" : "light");
    dispatch(updateStore({ isDark: userIsDark }));
  }, []);
  return (
    <a href="#" className="dark-mode d-flex justify-content-center align-items-center position-absolute" onClick={handleClick}>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d={isDark ? "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" : "M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"}></path>
      </svg>
    </a>
  );
};

const Hamburger: React.FC<HamburgerProps> = ({ sidebarActive, btnRef }) => {
  const dispatch = useAppDispatch();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(updateStore({ sidebarActive: !sidebarActive }));
  };
  return (
    <a href="#" className={`hamburger d-flex justify-content-center align-items-center position-absolute ${isActive(sidebarActive)}`} onClick={handleClick} ref={btnRef}>
      <span />
    </a>
  );
};

const SearchBtn: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(updateStore({ searchBarActive: true }));
  const handleKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        dispatch(updateStore({ searchBarActive: false, searchString: "" }));
        break;
      default:
        if (store.getState().searchBarActive) return;
        if (e.ctrlKey && e.key === "k") {
          e.preventDefault();
          handleClick();
        }
        break;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);
  return (
    <div className="search-btn p-1 position-absolute d-flex align-items-center" onClick={handleClick}>
      <div className="search-btn-container p-1 d-flex align-items-center w-100 rounded-1 bg-white shadow-1">
        <SearchIcon width={15} height={15} />
        <div className="flex-grow-1 text-center">
          <kbd className="my-0 text-x-small">Ctrl</kbd>
          <kbd className="my-0 text-x-small">K</kbd>
        </div>
      </div>
    </div>
  );
};
