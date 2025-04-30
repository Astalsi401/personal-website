import { useEffect } from "react";
import store, { updateStore, useAppDispatch } from "@store";
import { Search } from "@icons";

export const SearchBtn: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(updateStore({ searchBarActive: true }));
  const handleKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        dispatch(updateStore({ searchBarActive: false, searchString: "" }));
        break;
      default:
        if (store.getState().searchBarActive) return;
        if (e.ctrlKey && e.key === "k") {
          e.preventDefault();
          handleClick();
        }
        break;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);
  return (
    <div className="search-btn p-1 position-absolute d-flex align-items-center" onClick={handleClick}>
      <div className="search-btn-container p-1 d-flex align-items-center w-100 rounded-1 bg-white text-primary-600 shadow-1">
        <Search width={15} height={15} />
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <kbd className="my-0 text-x-small">Ctrl</kbd>
          <kbd className="my-0 text-x-small">K</kbd>
        </div>
      </div>
    </div>
  );
};
