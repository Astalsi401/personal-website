import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { updateStore, useAppDispatch } from "@store";
import { isMyPage } from "@functions";
import { Project } from "@/components";
import type { Categories } from "@/types";

export const IndexPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const index = useLoaderData() as Categories;
  const isPortfolio = index.category === "Portfolio";
  useEffect(() => {
    document.title = index.category;
    dispatch(updateStore({ currentPostTitles: [] }));
  }, [index.category]);
  return (
    <main id="main-content" className={`container${isPortfolio ? "-xl" : ""} shadow-lg p-3`}>
      <h1 className="my-5 text-center">{index.category}</h1>
      {isPortfolio ? <Portfolio index={index} /> : <Normal index={index} />}
    </main>
  );
};

const Normal: React.FC<{ index: Categories }> = ({ index }) => (
  <div className="index my-5">
    <ul className="mx-auto my-3 text-center w-lg-50 w-100">
      {index.pages.map(({ page, href }) => (
        <li key={page} className="my-2">
          <Link to={`${import.meta.env.BASE_URL}${index.href}${href}`} className="p-2 position-relative text-decoration-none">
            {page}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Portfolio: React.FC<{ index: Categories }> = ({ index }) => (
  <div className="row">
    {index.pages.map(({ page, href, thumbnail, tags }) => (
      <Project key={page} page={page} path={index.href} href={href} myPage={isMyPage(href)} thumbnail={thumbnail} tags={tags} />
    ))}
  </div>
);
