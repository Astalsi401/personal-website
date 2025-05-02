import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { updateStore, useAppDispatch, useAppSelector, CurrentPostTitleType } from "@store";
import { clsx, isActive, isMyPage, titleToHash } from "@functions";
import { Categories, SidebarProps } from "@/types";

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
    <aside id={sidebarID} className={clsx("position-fixed bg-main-bg", isActive(sidebarActive))} ref={wrapperRef}>
      <div className="py-5 d-flex justify-content-center align-items-center">
        <a className="social-link d-block bg-main-text" href="https://github.com/Astalsi401" target="_blank" title="My GitHub" style={{ mask: `url(${import.meta.env.BASE_URL}/assets/images/github-mark.svg)`, maskSize: "cover" }}></a>
      </div>
      <h2 className="px-2">
        <Link to={`${import.meta.env.BASE_URL}${index.href}`} id={sidebarAnchorID} className="text-decoration-none" onClick={handleLinkClick}>
          {index.category}
        </Link>
      </h2>
      <ul className="menu py-3">
        {index.pages.map((p, i) => {
          const isCurrent = page ? p.href === `/${page}` : p.href === `/${href}`;
          const relativePath = isMyPage(p.href);
          const showChildren = isCurrent && currentPostTitles.length > 0;
          return (
            <li key={i} className={clsx(showChildren && "has-children", "position-relative")} onClick={click}>
              <Link to={relativePath ? `${import.meta.env.BASE_URL}${index.href === "/" ? "" : index.href}${p.href}` : p.href} target={relativePath ? "_self" : "_blank"} className={clsx("px-3 py-2 d-block text-decoration-none text-bold position-relative", isCurrent && "current")} onClick={handleLinkClick}>
                <span className="position-relative">{p.page}</span>
              </Link>
              {showChildren && <SidebarChild currentPostTitles={currentPostTitles} childrenActive={childrenActive} />}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

const SidebarChild: React.FC<{ currentPostTitles: CurrentPostTitleType[]; childrenActive: boolean }> = ({ currentPostTitles, childrenActive }) => (
  <ul className={clsx("children", isActive(childrenActive))}>
    {currentPostTitles.map(({ title }) => (
      <li key={title}>
        <a className="ps-4 py-2 d-block text-decoration-none position-relative" href={`#${titleToHash(title)}`}>
          <span className="position-relative">{title}</span>
        </a>
      </li>
    ))}
  </ul>
);
