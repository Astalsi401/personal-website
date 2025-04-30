import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { updateStore, useAppDispatch, useAppSelector } from "@store";
import { clsx, getIndex, isActive, isMyPage } from "@functions";
import { Search } from "@icons";
import type { Page } from "@/types";

export const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchBarActive = useAppSelector((state) => state.searchBarActive);
  const searchString = useAppSelector((state) => state.searchString);
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => dispatch(updateStore({ searchString: value }));
  useEffect(() => {
    document.body.style.overflowY = searchBarActive ? "hidden" : "auto";
  }, [searchBarActive]);
  useEffect(() => {
    searchBarActive && searchRef.current && searchRef.current.focus();
  }, [searchBarActive, searchRef.current]);
  return (
    <>
      <div className={clsx("search-bar position-fixed col-md-6 col-10 p-3 pb-5 mx-auto bg-white rounded-1 shadow", isActive(searchBarActive))}>
        <div className="w-100 w-lg-75 p-2 mx-auto d-flex align-items-center border-solid border-1 bd-primary rounded-1 bg-main-bg">
          <div className="d-flex align-items-center">
            <Search width={20} height={20} />
          </div>
          <input ref={searchRef} className="d-block flex-grow-1 w-100 ps-2 text-large bg-main-bg border-0 text-black" type="text" placeholder="Search" value={searchString} onChange={handleSearch} />
        </div>
        <SearchResults searchString={searchString} />
      </div>
      {searchBarActive && <div className="modal-bg" onClick={() => dispatch(updateStore({ searchBarActive: false, searchString: "" }))}></div>}
    </>
  );
};

const SearchResults: React.FC<{ searchString: string }> = ({ searchString }) => {
  const [re, setRe] = useState<RegExp>(new RegExp("", "i"));
  const [inputTimer, setInputTimer] = useState<null | NodeJS.Timeout>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const handleRegexp = () => {
    setInputTimer(null);
    setRe(
      new RegExp(
        searchString
          .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
          .split(" ")
          .filter((s) => s !== "")
          .map((s) => `(?=.*${s})`)
          .join(""),
        "i"
      )
    );
  };
  const checkText = (elems: string[]) => re.test(elems.join(" ").replace(/\r|\n/g, ""));
  useEffect(() => {
    (async () => setPages(await getIndex().then(({ index }) => index.map(({ pages, href, category }) => pages.map((page) => ({ ...page, href: isMyPage(page.href) ? `${import.meta.env.BASE_URL}${href}${page.href}` : page.href, tags: page.tags ? [category, ...page.tags] : [category] }))).flat())))();
  }, []);
  useEffect(() => {
    inputTimer && clearTimeout(inputTimer);
    setInputTimer(setTimeout(handleRegexp, 500));
  }, [searchString]);
  return <div className="search-results w-100 w-lg-75 p-2 pt-0 mx-auto mt-4 overflow-auto">{re.source !== "(?:)" && pages.filter(({ page, tags }) => checkText(tags ? [page, ...tags] : [page])).map((page) => <SingleResult key={page.href} {...page} />)}</div>;
};

const SingleResult: React.FC<Page> = ({ page, href, tags }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(updateStore({ searchBarActive: false, searchString: "" }));
  return (
    <Link className="d-block my-2 p-2 bg-main-bg text-decoration-none" to={href} target={isMyPage(href) ? "_self" : "_blank"} onClick={handleClick}>
      <div className="page-title">{page}</div>
      {tags && <Tags tags={tags} />}
    </Link>
  );
};

export const Tags: React.FC<{ className?: string; tags: string[] }> = ({ className, tags }) => (
  <div className={clsx("page-tags d-flex flex-wrap align-items-end", className)}>
    {tags.map((tag, i) => (
      <div key={tag} className="page-tag text-small px-1 m-1 rounded-1 shadow-sm" style={{ "--i": i } as React.CSSProperties}>
        {tag}
      </div>
    ))}
  </div>
);
