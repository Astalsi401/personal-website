import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateStore } from "@store";
import { isActive, titleToHash } from "@functions";

export const Sidebar = ({ wrapperRef }) => {
  const dispatch = useDispatch();
  const index = useLoaderData();
  const sidebarID = useSelector((state) => state.sidebarID);
  const sidebarAnchorID = useSelector((state) => state.sidebarAnchorID);
  const sidebarActive = useSelector((state) => state.sidebarActive);
  const currentPostTitles = useSelector((state) => state.currentPostTitles);
  const [childrenActive, setChildrenActive] = useState(false);
  const { page, href } = useParams();
  const click = () => setChildrenActive((prev) => !prev);
  const handleLinkClick = () => dispatch(updateStore({ sidebarActive: false }));
  return (
    <aside id={sidebarID} className={`position-fixed ${isActive(sidebarActive)}`} ref={wrapperRef}>
      <h1 className="pt-5 pb-3 text-center">
        <Link to={`${import.meta.env.BASE_URL}${index.href}`} id={sidebarAnchorID} className="text-decoration-none" onClick={handleLinkClick}>
          {index.category}
        </Link>
      </h1>
      <ul className="menu py-3">
        {index.pages.map((p, i) => {
          const isCurrent = page ? p.href === `/${page}` : p.href === `/${href}`;
          const isMyPage = /^http/.test(p.href);
          const showChildren = isCurrent && currentPostTitles.length > 0;
          return (
            <li key={i} className={`${showChildren ? "has-children" : ""}`} onClick={click}>
              <Link to={isMyPage ? p.href : `${import.meta.env.BASE_URL}${index.href === "/" ? "" : index.href}${p.href}`} target={isMyPage ? "_blank" : "_self"} className={`px-3 text-decoration-none text-large text-bold ${isCurrent ? "current" : ""}`} onClick={handleLinkClick}>
                <span>{p.page}</span>
              </Link>
              {showChildren && <SidebarChild currentPostTitles={currentPostTitles} childrenActive={childrenActive} />}
            </li>
          );
        })}
      </ul>
      <div className="pt-3 pb-5 d-flex justify-content-center align-items-center">
        <a className="social-link d-block" href="https://github.com/Astalsi401" target="_blank" title="My GitHub" style={{ mask: `url(${import.meta.env.BASE_URL}/assets/images/github-mark.svg)`, maskSize: "cover" }}></a>
      </div>
    </aside>
  );
};

const SidebarChild = ({ currentPostTitles, childrenActive }) => (
  <ul className={`children ${isActive(childrenActive)}`}>
    {currentPostTitles.map(({ title }) => (
      <li key={title}>
        <a className="ps-4 text-decoration-none" href={`#${titleToHash(title)}`}>
          <span>{title}</span>
        </a>
      </li>
    ))}
  </ul>
);
