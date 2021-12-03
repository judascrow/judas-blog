import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-5 text-center">
      <h2 className="text-4xl text-red-500 font-bold leading-loose">Sorry</h2>
      <p className="leading-loose">That page cannot be found</p>
      <Link to="/" className="text-green-500 font-semibold">
        Back to the homepage...
      </Link>
    </div>
  );
};

export default NotFound;
