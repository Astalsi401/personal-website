import { useState, useEffect, useRef } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateStore } from "../assets/store";
import { isActive } from "./functions";

const sidebarAnchor = "sidebarAnchor";
const sidebar = "sidebar";

export function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const wrapperRef = useRef(null);
  const btnRef = useRef(null);
  const handleFocusIn = ({ target }) => setSidebarActive((prev) => (wrapperRef.current.contains(target) ? true : btnRef.current.contains(target) ? prev : false));
  const handleClick = (e) => {
    e.preventDefault();
    setSidebarActive((prev) => !prev);
  };
  const handleClickOut = ({ target }) => setSidebarActive((prev) => (wrapperRef.current && !wrapperRef.current.contains(target) && !btnRef.current.contains(target) ? false : prev));
  const handleClickFrame = ({ data }) => {
    if (data.window && data.window === "iframe") setSidebarActive(false);
  };
  useEffect(() => {
    document.addEventListener("pointerdown", handleClickOut);
    document.addEventListener("focusin", handleFocusIn);
    window.addEventListener("message", handleClickFrame);
    return () => {
      document.removeEventListener("pointerdown", handleClickOut);
      document.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("message", handleClickFrame);
    };
  }, []);
  return (
    <>
      <Accessibility />
      <header id="header" className="position-fixed w-100">
        <nav id="navbar" className="position-relative">
          <Link to={import.meta.env.BASE_URL} className="home d-block position-absolute">
            <svg viewBox="0 0 500 500">
              <path d="M250 100 L450 230,350 230,350 400,150 400,150 230,50 230,250 100" />
            </svg>
          </Link>
          <a href="#" className={`hamberger d-flex justify-content-center align-items-center position-absolute ${isActive(sidebarActive)}`} onClick={handleClick} ref={btnRef}>
            <span />
          </a>
          <DarkMode />
        </nav>
        <ProgressBar />
        <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} wrapperRef={wrapperRef} />
      </header>
    </>
  );
}

function Sidebar({ sidebarActive, setSidebarActive, wrapperRef }) {
  const index = useLoaderData();
  const [childrenActive, setChildrenActive] = useState(false);
  const { page, href } = useParams();
  const click = () => setChildrenActive((prev) => !prev);
  const handleLinkClick = () => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    setSidebarActive(false);
  };
  return (
    <aside id={sidebar} className={`position-absolute ${isActive(sidebarActive)}`} ref={wrapperRef}>
      <h1 className="pt-5 pb-3 text-center">
        <Link to={`${import.meta.env.BASE_URL}${index.href}`} id={sidebarAnchor} className="text-decoration-none" onClick={handleLinkClick}>
          {index.category}
        </Link>
      </h1>
      <ul className="menu py-3">
        {index.pages.map((p, i) => {
          const isCurrent = page ? p.href === `/${page}` : p.href === `/${href}`;
          const isMyPage = /^http/.test(p.href);
          return (
            <li key={i} className={`${p.section ? "has-children" : ""}`} onClick={click}>
              <Link to={isMyPage ? p.href : `${import.meta.env.BASE_URL}${index.href === "/" ? "" : index.href}${p.href}`} target={isMyPage ? "_blank" : "_self"} className={`px-3 text-decoration-none text-large text-bold ${isCurrent ? "current" : ""}`} onClick={handleLinkClick}>
                <span>{p.page}</span>
              </Link>
              {isCurrent && p.section && <SidebarChild sections={p.section} childrenActive={childrenActive} />}
            </li>
          );
        })}
      </ul>
      <div className="pt-3 pb-5 d-flex justify-content-center align-items-center">
        <a className="social-link d-block" href="https://github.com/Astalsi401" target="_blank" title="My GitHub" style={{ mask: `url(${import.meta.env.BASE_URL}/assets/images/github-mark.svg)`, maskSize: "cover" }}></a>
      </div>
    </aside>
  );
}

function SidebarChild({ sections, childrenActive }) {
  return (
    <ul className={`children ${isActive(childrenActive)}`}>
      {sections.map((s) => (
        <li key={s.title}>
          <a className="ps-4 text-decoration-none" href={s.href}>
            <span>{s.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Accessibility() {
  const access = [
    { href: "#main-content", text: "Skip to main content" },
    { href: `#${sidebarAnchor}`, text: "Skip to sidebar" },
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
}

function ProgressBar() {
  const [percent, setPercent] = useState(0);
  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setPercent(((winScroll / height) * 100).toFixed(2));
  };
  useEffect(() => {
    window.addEventListener("load", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div className="progress w-100 position-relative" style={{ "--percent": percent }} />;
}

function DarkMode() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.isDark);
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("isDark", !isDark);
    document.body.setAttribute("data-theme", !isDark ? "dark" : "light");
    dispatch(updateStore({ isDark: !isDark }));
  };
  useEffect(() => {
    let localIsDark = localStorage.getItem("isDark");
    let userIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (localIsDark !== null) userIsDark = localIsDark === "true";
    localStorage.setItem("isDark", userIsDark);
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
}
