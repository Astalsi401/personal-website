import { Link, useRouteError } from "react-router";

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as Error;
  console.error(error);
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="text-center d-flex flex-column g-3">
        <div>
          <h1>Oops!</h1>
        </div>
        <div>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
        <div>
          <Link to={import.meta.env.BASE_URL}>Home Page</Link>
        </div>
      </div>
    </div>
  );
};
