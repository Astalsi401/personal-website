import { Link, useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { toggleActive } from "./functions";

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
          <a href="#" className={`hamberger d-flex justify-content-center align-items-center position-absolute ${toggleActive(sidebarActive)}`} onClick={handleClick} ref={btnRef}>
            <span />
          </a>
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
    <aside id={sidebar} className={`position-absolute ${toggleActive(sidebarActive)}`} ref={wrapperRef}>
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
        <a className="social-link d-block" href="https://github.com/Astalsi401" target="_blank" title="My GitHub">
          <img src={`${import.meta.env.BASE_URL}/assets/images/github-mark.svg`} alt="github-mark" />
        </a>
      </div>
    </aside>
  );
}

function SidebarChild({ sections, childrenActive }) {
  return (
    <ul className={`children ${toggleActive(childrenActive)}`}>
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