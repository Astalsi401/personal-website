import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { updateStore, useAppDispatch, useAppSelector, CurrentPostTitleType } from "@store";
import { isActive, isMyPage, titleToHash } from "@functions";
import { Categories, SidebarProps } from "@types";

export const Sidebar: React.FC<SidebarProps> = ({ wrapperRef }) => {
  const dispatch = useAppDispatch();
  const index = useLoaderData() as Categories;
  const sidebarID = useAppSelector((state) => state.sidebarID);
  const sidebarAnchorID = useAppSelector((state) => state.sidebarAnchorID);
  const sidebarActive = useAppSelector((state) => state.sidebarActive);
  const currentPostTitles = useAppSelector((state) => state.currentPostTitles);
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
          const relativePath = isMyPage(p.href);
          const showChildren = isCurrent && currentPostTitles.length > 0;
          return (
            <li key={i} className={`${showChildren ? "has-children" : ""}`} onClick={click}>
              <Link to={relativePath ? `${import.meta.env.BASE_URL}${index.href === "/" ? "" : index.href}${p.href}` : p.href} target={relativePath ? "_self" : "_blank"} className={`px-3 text-decoration-none text-large text-bold ${isCurrent ? "current" : ""}`} onClick={handleLinkClick}>
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

const SidebarChild: React.FC<{ currentPostTitles: CurrentPostTitleType[]; childrenActive: boolean }> = ({ currentPostTitles, childrenActive }) => (
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