import { Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../other/LoadingSpinner";

export default function Login() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;
    
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-3xl p-4 shadow dark:border md:mt-0 sm:max-w-md xl:p-">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link
              to="/"
              className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
            >
              <img className="w-20 h-20" src="./public/logo.png" alt="logo" />
            </Link>
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-black md:text-2xl">
              Sign in
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <Tooltip
                  label="Enter email"
                  bg="black"
                  borderRadius={10}
                  p={1.5}
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                  />
                </Tooltip>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Password
                </label>
                <Tooltip
                  label="Enter password"
                  bg="black"
                  borderRadius={10}
                  p={1.5}
                >
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </Tooltip>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-black">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-black"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
