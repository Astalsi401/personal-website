import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateStore } from "../assets/store";

const IndexPage = () => {
  const dispatch = useDispatch();
  const index = useLoaderData();
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

const Normal = ({ index }) => (
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

const Portfolio = ({ index }) => {
  const logo = {
    python: "/assets/images/python-logo.svg",
    css: "/assets/images/CSS3-logo.svg",
    js: "/assets/images/js-logo.svg",
  };
  return (
    <div className="row">
      {index.pages.map(({ page, href, thumbnail, tags }) => {
        const isMyPage = /^http/.test(href);
        return (
          <div className="col-sm-6 col-md-4 col-lg-3 p-2" key={page}>
            <Link to={isMyPage ? href : `${import.meta.env.BASE_URL}${index.href}${href}`} target={isMyPage ? "_blank" : "_self"} className="d-block bg-white shadow-sm w-100 h-100 text-center text-decoration-none portfolio">
              <div className={`portfolio-thumb w-100 ratio-16by9 position-relative overflow-hidden ${logo[thumbnail] ? "page-logo" : "page-view"}`} style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${logo[thumbnail] ? logo[thumbnail] : thumbnail})` }}>
                <div className="tags position-absolute d-flex flex-wrap align-items-end">
                  {tags.map((tag, i) => (
                    <div key={tag} className="tag text-small px-1 m-1 rounded-1 shadow-sm" style={{ "--i": i }}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-2">{page}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default IndexPage;
