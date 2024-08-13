import { Link, useRouteError } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as Error;
  console.error(error);
  return (
    <div id="error-page text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to={import.meta.env.BASE_URL}>Back to Home Page</Link>
    </div>
  );
};
