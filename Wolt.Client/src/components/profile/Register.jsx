import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../other/LoadingSpinner";

export default function Register() {
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
        <div className="w-full bg-white rounded-3xl p-5 shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link
              to="/"
              className="flex items-center justify-center mb-6 text-2xl font-semibold text-black"
            >
              <img className="w-20 h-20" src="./public/logo.png" alt="logo" />
            </Link>
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-black md:text-2xl">
              Register
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4"
                  placeholder="Name..."
                  required
                />
                <label
                  htmlFor="surname"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your surname
                </label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4"
                  placeholder="Surname..."
                  required
                />
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4"
                  placeholder="name@company.com"
                  required
                />
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4"
                  placeholder="Phone..."
                  required
                />
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4"
                  required
                />
                <label
                  htmlFor="trypassword"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Try Password
                </label>
                <input
                  type="password"
                  name="trypassword"
                  id="trypassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="ml-3 text-sm"></div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                You have account?{" "}
                <Link
                  to="/login"
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
