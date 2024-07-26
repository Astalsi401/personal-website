import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateStore } from "@store";

export const Root = () => {
  const dispatch = useDispatch();
  const { category, pages } = useLoaderData();
  useEffect(() => {
    document.title = category;
    dispatch(updateStore({ currentPostTitles: [] }));
  }, [category]);
  return (
    <div className="container-sm py-5">
      <h1 className="my-5 py-5 text-center text-xxx-large">{category}</h1>
      <div className="my-5 py-5 px-sm-5 d-flex flex-wrap justify-content-center">
        {pages.map(({ page, icon, href }) => (
          <Link key={page} to={`${import.meta.env.BASE_URL}${href}`} className="home-page-icon m-2 p-1 d-block text-decoration-none">
            {icon.endsWith(".svg") ? <div className="w-100 mx-auto bg-black" style={{ aspectRatio: 1, mask: `url(${import.meta.env.BASE_URL}${icon})`, maskSize: "cover" }}></div> : <img src={`${import.meta.env.BASE_URL}${icon}`} alt={`icon-${page}`} className="d-block w-100 mx-auto" />}
            <span className="d-block text-center">{page}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
