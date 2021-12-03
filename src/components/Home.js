import useFetch from "../useFetch";
import BlogList from "./BlogList";
import Spinner from "./Spinner";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && (
        <div className="text-xl font-semibold text-red-500 text-center">
          {error}
        </div>
      )}
      {isPending && <Spinner />}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
    </div>
  );
};

export default Home;
