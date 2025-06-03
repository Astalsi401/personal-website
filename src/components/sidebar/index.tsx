import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { updateStore, useAppDispatch, useAppSelector, CurrentPostTitleType } from "@store";
import { clsx, isActive, isMyPage, titleToHash } from "@functions";
import type { Categories, Page } from "@/types";

type SidebarProps = { wrapperRef: React.RefObject<HTMLElement | null> };

export const Sidebar: React.FC<SidebarProps> = ({ wrapperRef }) => {
  const dispatch = useAppDispatch();
  const index = useLoaderData<Categories>();
  const sidebarID = useAppSelector((state) => state.sidebarID);
  const sidebarAnchorID = useAppSelector((state) => state.sidebarAnchorID);
  const sidebarActive = useAppSelector((state) => state.sidebarActive);
  const currentPostTitles = useAppSelector((state) => state.currentPostTitles);
  const [childrenActive, setChildrenActive] = useState<boolean>(false);
  const [pages, setPages] = useState<Page[]>(index.pages);
  const [category, setCategory] = useState<{ text: string; href: string }>({ text: index.category, href: index.href });
  const { href, page } = useParams();
  const click = () => setChildrenActive((prev) => !prev);
  const handleLinkClick = () => dispatch(updateStore({ sidebarActive: false }));
  useEffect(() => {
    if (page && href) {
      const current = index.pages.find((p) => p.href === `/${href}`);
      if (!current || !current.pages) return;
      setCategory({ text: current.page, href: current.href });
      setPages(current.pages);
    } else {
      setCategory({ text: index.category, href: index.href });
      setPages(index.pages);
    }
  }, [index.pages, href, page]);
  return (
    <aside id={sidebarID} className={clsx("position-fixed bg-main-bg", isActive(sidebarActive))} ref={wrapperRef}>
      <div className="py-5 d-flex justify-content-center align-items-center">
        <a className="social-link d-block bg-main-text" href="https://github.com/Astalsi401" target="_blank" title="My GitHub" style={{ mask: `url(${import.meta.env.BASE_URL}/assets/images/github-mark.svg)`, maskSize: "cover" }}></a>
      </div>
      <h2 className="px-2">
        <Link to={`${import.meta.env.BASE_URL}${category.href}`} id={sidebarAnchorID} className="text-decoration-none" onClick={handleLinkClick}>
          {category.text}
        </Link>
      </h2>
      <ul className="menu py-3">
        {pages.map((p) => (
          <SidebarLink key={p.href} p={p} currentPostTitles={currentPostTitles} click={click} handleLinkClick={handleLinkClick} childrenActive={childrenActive} indexHref={category.href} />
        ))}
      </ul>
    </aside>
  );
};

type SidebarLinkProps = { p: Page; currentPostTitles: CurrentPostTitleType[]; click: () => void; handleLinkClick: () => void; childrenActive: boolean; indexHref: string };
const SidebarLink: React.FC<SidebarLinkProps> = ({ p, currentPostTitles, click, handleLinkClick, childrenActive, indexHref }) => {
  const { href, page } = useParams();
  const isCurrent = page ? p.href === `/${page}` : p.href === `/${href}`;
  const relativePath = isMyPage(p.href);
  const showChildren = isCurrent && currentPostTitles.length > 0;
  return (
    <li className={clsx(showChildren && "has-children", "position-relative")} onClick={click}>
      <Link to={relativePath ? `${import.meta.env.BASE_URL}${indexHref === "/" ? "" : indexHref}${p.href}` : p.href} target={relativePath ? "_self" : "_blank"} className={clsx("px-3 py-2 d-block text-decoration-none text-bold position-relative", isCurrent && "current")} onClick={handleLinkClick}>
        <span className="position-relative">{p.page}</span>
      </Link>
      {showChildren && <SidebarChild currentPostTitles={currentPostTitles} childrenActive={childrenActive} />}
    </li>
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
