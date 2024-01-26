import { useLoaderData } from "react-router-dom";

export default function IndexPage() {
  const index = useLoaderData();
  const isPortfolio = index.category === "Portfolio";
  return (
    <main id="main-content" className={`container${isPortfolio ? "-xl" : ""} shadow-lg p-3`}>
      <h1 className="my-5 text-center">{index.category}</h1>
      {isPortfolio ? <Portfolio index={index} /> : <Normal index={index} />}
    </main>
  );
}

const Normal = ({ index }) => {
  return (
    <div className="index my-5">
      <ul className="mx-auto my-3 text-center w-lg-50 w-100">
        {index.pages.map((page) => (
          <li key={page.page} className="my-2">
            <a className="p-2 position-relative text-decoration-none" href={page.href}>
              {page.page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Portfolio = ({ index }) => {
  const logo = {
    python: "/assets/images/python-logo.svg",
    css: "/assets/images/CSS3-logo.svg",
    js: "/assets/images/js-logo.svg",
  };
  return (
    <div className="row">
      {index.pages.map((page) => (
        <div className="col-sm-6 col-md-4 col-lg-3 p-2" key={page.page}>
          <a className="d-block bg-white shadow-sm w-100 h-100 text-center text-decoration-none portfolio" href={page.href} target="_blank">
            <div className={`portfolio-thumb w-100 ratio-16by9 position-relative overflow-hidden ${logo[page.thumbnail] ? "page-logo" : "page-view"}`} style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${logo[page.thumbnail] ? logo[page.thumbnail] : page.thumbnail})` }}>
              <div className="tags position-absolute d-flex align-items-end">
                {page.tags.map((tag, i) => (
                  <div key={tag} className="tag text-small px-1 m-1 rounded-1 shadow-sm" style={{ "--i": i }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="py-2">{page.page}</div>
          </a>
        </div>
      ))}
    </div>
  );
};
