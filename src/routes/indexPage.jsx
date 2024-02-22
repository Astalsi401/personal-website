import { useLoaderData, Link } from "react-router-dom";
import { useEffect } from "react";

export default function IndexPage() {
  const index = useLoaderData();
  const isPortfolio = index.category === "Portfolio";
  useEffect(() => {
    document.title = index.category;
  }, [index.category]);
  return (
    <main id="main-content" className={`container${isPortfolio ? "-xl" : ""} shadow-lg p-3`}>
      <h1 className="my-5 text-center">{index.category}</h1>
      {isPortfolio ? <Portfolio index={index} /> : <Normal index={index} />}
    </main>
  );
}

function Normal({ index }) {
  return (
    <div className="index my-5">
      <ul className="mx-auto my-3 text-center w-lg-50 w-100">
        {index.pages.map((page) => (
          <li key={page.page} className="my-2">
            <Link to={`${import.meta.env.BASE_URL}${index.href}${page.href}`} className="p-2 position-relative text-decoration-none">
              {page.page}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Portfolio({ index }) {
  const logo = {
    python: "/assets/images/python-logo.svg",
    css: "/assets/images/CSS3-logo.svg",
    js: "/assets/images/js-logo.svg",
  };
  return (
    <div className="row">
      {index.pages.map((page) => {
        const isMyPage = /^http/.test(page.href);
        return (
          <div className="col-sm-6 col-md-4 col-lg-3 p-2" key={page.page}>
            <Link to={isMyPage ? page.href : `${import.meta.env.BASE_URL}${index.href}${page.href}`} target={isMyPage ? "_blank" : "_self"} className="d-block bg-white shadow-sm w-100 h-100 text-center text-decoration-none portfolio">
              <div className={`portfolio-thumb w-100 ratio-16by9 position-relative overflow-hidden ${logo[page.thumbnail] ? "page-logo" : "page-view"}`} style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${logo[page.thumbnail] ? logo[page.thumbnail] : page.thumbnail})` }}>
                <div className="tags position-absolute d-flex flex-wrap align-items-end">
                  {page.tags.map((tag, i) => (
                    <div key={tag} className="tag text-small px-1 m-1 rounded-1 shadow-sm" style={{ "--i": i }}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-2">{page.page}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
