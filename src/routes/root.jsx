import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateStore } from "../assets/store";

export default function Root({ category }) {
  const index = useLoaderData();
  useEffect(() => {
    document.title = index.category;
    dispatch(updateStore({ currentSections: [] }));
  }, [index.category]);
  return (
    <div className="container-sm py-5">
      <h1 className="my-5 py-5 text-center text-xxx-large">{category}</h1>
      <div className="my-5 py-5 px-sm-5 d-flex flex-wrap justify-content-center">
        {index.pages.map((d) => (
          <Link key={d.page} to={`${import.meta.env.BASE_URL}${d.href}`} className="home-page-icon m-2 p-1 d-block text-decoration-none">
            {d.icon.endsWith(".svg") ? <div className="w-100 mx-auto bg-black" style={{ aspectRatio: 1, mask: `url(${import.meta.env.BASE_URL}${d.icon})`, maskSize: "cover" }}></div> : <img src={`${import.meta.env.BASE_URL}${d.icon}`} alt={`icon-${d.page}`} className="d-block w-100 mx-auto" />}
            <span className="d-block text-center">{d.page}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
