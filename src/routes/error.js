import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404 | There's nothing here!</h1>
      <span>
        Looks like you are lost? Go back <Link to="/">Home</Link>
      </span>
    </div>
  );
};
export default ErrorPage;
