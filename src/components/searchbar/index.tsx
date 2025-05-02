import { useEffect, useRef } from "react";
import { updateStore, useAppDispatch, useAppSelector } from "@store";
import { clsx } from "@functions";
import { Search } from "@icons";
import { SearchResults } from "./search-result";

export const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchBarActive = useAppSelector((state) => state.searchBarActive);
  const searchString = useAppSelector((state) => state.searchString);
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => dispatch(updateStore({ searchString: value }));
  useEffect(() => {
    document.body.style.overflowY = searchBarActive ? "hidden" : "auto";
  }, [searchBarActive]);
  useEffect(() => {
    searchBarActive && searchRef.current && searchRef.current.focus();
  }, [searchBarActive, searchRef.current]);
  return (
    <>
      <div className={clsx("search-bar position-fixed col-md-6 col-10 p-3 pb-5 mx-auto bg-white rounded-1 shadow", !searchBarActive && "d-none")}>
        <div className="w-100 w-lg-75 p-2 mx-auto d-flex align-items-center border-solid border-1 bd-primary rounded-1 bg-main-bg">
          <input ref={searchRef} className="d-block flex-grow-1 w-100 ps-2 text-large bg-main-bg border-0 text-black" type="text" placeholder="Search" value={searchString} onChange={handleSearch} />
          <div className="d-flex align-items-center pointer">
            <Search width={20} height={20} />
          </div>
        </div>
        <SearchResults searchString={searchString} />
      </div>
      {searchBarActive && <div className="modal-bg" onClick={() => dispatch(updateStore({ searchBarActive: false, searchString: "" }))}></div>}
    </>
  );
};
