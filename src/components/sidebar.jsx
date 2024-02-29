import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateStore } from "../assets/store";
import { isActive } from "./functions";

export function Sidebar({ wrapperRef }) {
  const dispatch = useDispatch();
  const index = useLoaderData();
  const sidebarID = useSelector((state) => state.sidebarID);
  const sidebarAnchorID = useSelector((state) => state.sidebarAnchorID);
  const sidebarActive = useSelector((state) => state.sidebarActive);
  const [childrenActive, setChildrenActive] = useState(false);
  const { page, href } = useParams();
  const click = () => setChildrenActive((prev) => !prev);
  const handleLinkClick = () => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    dispatch(updateStore({ sidebarActive: false }));
  };
  return (
    <aside id={sidebarID} className={`position-absolute ${isActive(sidebarActive)}`} ref={wrapperRef}>
      <h1 className="pt-5 pb-3 text-center">
        <Link to={`${import.meta.env.BASE_URL}${index.href}`} id={sidebarAnchorID} className="text-decoration-none" onClick={handleLinkClick}>
          {index.category}
        </Link>
      </h1>
      <ul className="menu py-3">
        {index.pages.map((p, i) => {
          const isCurrent = page ? p.href === `/${page}` : p.href === `/${href}`;
          const isMyPage = /^http/.test(p.href);
          return (
            <li key={i} className={`${isCurrent && p.section ? "has-children" : ""}`} onClick={click}>
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
