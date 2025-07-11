import { useEffect, useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { isMyPage } from "@functions";
import { updateStore, useAppDispatch } from "@store";
import { Tags } from "@ui/tags";
import { LoadingComponent } from "@ui/loading";
import type { Categories, Page } from "@/types";

export const SearchResults: React.FC<{ searchString: string }> = ({ searchString }) => {
  const index = useLoaderData<Categories>();
  const [re, setRe] = useState<RegExp>(new RegExp("", "i"));
  const [pages, setPages] = useState<Page[]>([]);
  const [inputTimer, setInputTimer] = useState<null | NodeJS.Timeout>(null);
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
  const results = useMemo(() => pages.filter(({ page, tags }) => checkText([page, ...(tags || [])])), [re, pages]);
  useEffect(() => {
    const allPages = index.pages.map((category) => category.pages?.map((page) => ({ ...page, href: isMyPage(page.href) ? `${import.meta.env.BASE_URL}${category.href}${page.href}` : page.href, tags: page.tags ? [category.page, ...page.tags] : [category.page] }))).flat();
    allPages.every((page) => page !== undefined) && setPages(allPages);
  }, []);
  useEffect(() => {
    inputTimer && clearTimeout(inputTimer);
    setInputTimer(setTimeout(handleRegexp, 500));
  }, [searchString]);
  return <div className="search-results w-100 w-lg-75 p-2 pt-0 mx-auto mt-4 overflow-auto">{inputTimer ? <LoadingComponent size={80} /> : re.source !== "(?:)" && results.map((page) => <SingleResult key={page.href} {...page} />)}</div>;
};

const SingleResult: React.FC<Page> = ({ page, href, tags }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(updateStore({ searchBarActive: false, searchString: "" }));
  return (
    <Link className="d-block my-2 p-2 bg-main-bg text-decoration-none" to={href} target={isMyPage(href) ? "_self" : "_blank"} onClick={handleClick}>
      <div>{page}</div>
      {tags && <Tags tags={tags} />}
    </Link>
  );
};
