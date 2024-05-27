import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStore } from "../assets/store";
import { getIndex, isMyPage } from "./functions";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchBarActive = useSelector((state) => state.searchBarActive);
  const searchString = useSelector((state) => state.searchString);
  const searchRef = useRef(null);
  const handleSearch = ({ target: { value } }) => dispatch(updateStore({ searchString: value }));
  useEffect(() => {
    document.body.style.overflowY = searchBarActive ? "hidden" : "auto";
  }, [searchBarActive]);
  useEffect(() => {
    searchBarActive && searchRef.current.focus();
  }, [searchBarActive, searchRef.current]);
  return (
    <>
      <div className={`search-bar position-fixed col-md-6 col-10 p-3 pb-5 mx-auto bg-white rounded-1 shadow ${searchBarActive ? "active" : ""}`}>
        <div className="w-100 w-lg-75 p-2 mx-auto d-flex align-items-center border-solid border-1 bd-primary rounded-1 bg-main-bg">
          <div className="d-flex align-items-center">
            <SearchIcon width="20" height="20" />
          </div>
          <input ref={searchRef} className="d-block flex-grow-1 w-100 ps-2 text-large bg-main-bg border-0 text-black" type="text" placeholder="Search" value={searchString} onChange={handleSearch} />
        </div>
        <SearchResults searchString={searchString} />
      </div>
      <div className="modal-bg" onClick={() => dispatch(updateStore({ searchBarActive: false, searchString: "" }))}></div>
    </>
  );
};
export const SearchIcon = ({ width, height }) => (
  <svg className="search-icon" width={width} height={height} viewBox="0 0 20 20">
    <path stroke="currentColor" fill="none" d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"></path>
  </svg>
);
const SearchResults = ({ searchString }) => {
  const [re, setRe] = useState(new RegExp("", "i"));
  const [inputTimer, setInputTimer] = useState(null);
  const [pages, setPages] = useState([]);
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
  const checkText = (elems) => re.test(elems.join(" ").replace(/\r|\n/g, ""));
  useEffect(() => {
    (async () => setPages(await getIndex().then(({ index }) => index.map(({ pages, href, category }) => pages.map((page) => ({ ...page, href: isMyPage(page.href) ? `${import.meta.env.BASE_URL}${href}${page.href}` : page.href, tags: page.tags ? [category, ...page.tags] : [category] }))).flat())))();
  }, []);
  useEffect(() => {
    clearTimeout(inputTimer);
    setInputTimer(setTimeout(handleRegexp, 500));
  }, [searchString]);
  return <div className="search-results w-100 w-lg-75 p-2 pt-0 mx-auto mt-4 overflow-auto">{re.source !== "(?:)" && pages.filter(({ page, tags }) => checkText([page, ...tags])).map((page) => <SingleResult key={page.href} {...page} />)}</div>;
};

const SingleResult = ({ page, href, tags }) => {
  const dispatch = useDispatch();
  return (
    <Link className="d-block my-2 p-2 bg-main-bg text-decoration-none" to={href} target={isMyPage(href) ? "_self" : "_blank"} onClick={() => dispatch(updateStore({ searchBarActive: false, searchString: "" }))}>
      <div className="page-title">{page}</div>
      {tags && <Tags tags={tags} />}
    </Link>
  );
};

export const Tags = ({ className, tags }) => (
  <div className={`page-tags d-flex flex-wrap align-items-end ${className ? className : ""}`}>
    {tags.map((tag, i) => (
      <div key={tag} className="page-tag text-small px-1 m-1 rounded-1 shadow-sm" style={{ "--i": i }}>
        {tag}
      </div>
    ))}
  </div>
);
