import { Link } from "react-router-dom";

const Page404 = () => (
  <div className="flex flex-col items-center justify-center gap-8">
    <p className="text-4xl">404 - Page Not Found</p>
    <Link
      to={`/`}
      className="!text-white w-96 rounded-md px-8
                py-3 text-center font-semibold"
    >
      Home
    </Link>
  </div>
);

export default Page404;
