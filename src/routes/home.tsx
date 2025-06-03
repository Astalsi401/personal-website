import { useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import { updateStore, useAppDispatch } from "@store";
import type { Categories } from "@/types";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useLoaderData<Categories>();
  useEffect(() => {
    document.title = data.category;
    dispatch(updateStore({ currentPostTitles: [] }));
  }, [data.category]);
  return (
    <div id="main-content" className="container-sm py-5">
      <h1 className="my-5 py-5 text-center text-xxx-large">{data.category}</h1>
      <div className="my-5 py-5 px-sm-5 d-flex flex-wrap justify-content-center">
        {data.pages.map(({ page, icon, href }) => (
          <Link key={page} to={`${import.meta.env.BASE_URL}${href}`} className="home-page-icon m-2 p-1 d-block text-decoration-none">
            {icon && icon.endsWith(".svg") ? <div className="w-100 mx-auto bg-black" style={{ aspectRatio: 1, mask: `url(${import.meta.env.BASE_URL}${icon})`, maskSize: "cover" }}></div> : <img src={`${import.meta.env.BASE_URL}${icon}`} alt={`icon-${page}`} className="d-block w-100 mx-auto" />}
            <span className="d-block text-center">{page}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
