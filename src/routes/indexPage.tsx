import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { updateStore, useAppDispatch } from "@store";
import { Tags } from "@components";
import { isMyPage } from "@functions";
import type { Categories } from "@types";

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

const Portfolio: React.FC<{ index: Categories }> = ({ index }) => {
  const logo: (logoPath: string) => string = (logoPath: string) => {
    switch (logoPath) {
      case "python":
        return "/assets/images/python-logo.svg";
      case "css":
        return "/assets/images/CSS3-logo.svg";
      case "js":
        return "/assets/images/js-logo.svg";
      default:
        return logoPath;
    }
  };
  return (
    <div className="row">
      {index.pages.map(({ page, href, thumbnail, tags }) => {
        const myPage = isMyPage(href);
        return (
          <div className="col-sm-6 col-md-4 col-lg-3 p-2" key={page}>
            <Link to={myPage ? `${import.meta.env.BASE_URL}${index.href}${href}` : href} target={myPage ? "_self" : "_blank"} className="d-block bg-white shadow-sm w-100 h-100 text-center text-decoration-none portfolio">
              <div className={`portfolio-thumb w-100 ratio-16by9 position-relative overflow-hidden ${thumbnail && thumbnail === logo(thumbnail) ? "page-view" : "page-logo"}`} style={{ backgroundImage: thumbnail && `url(${import.meta.env.BASE_URL}${logo(thumbnail)})` }}>
                {tags && <Tags className="position-absolute" tags={tags} />}
              </div>
              <div className="py-2">{page}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
