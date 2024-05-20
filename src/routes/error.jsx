import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to={import.meta.env.BASE_URL}>Back to Home Page</Link>
    </div>
  );
};

export default ErrorPage;
