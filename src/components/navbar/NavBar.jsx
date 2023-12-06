import React from "react";
import LogoIcon from "../../assets/iconmonstr-triangle-1.svg";

const navbarData = [
  {
    name: "Features",
    path: "Features",
  },
  {
    name: "Testimonial",
    path: "Testimonial",
  },
  {
    name: "Pricing",
    path: "Pricing",
  },
  {
    name: "FAQs",
    path: "FAQs",
  },
  {
    name: "Blog",
    path: "Blog",
  },
];

const NavBar = () => {
  return (
    <nav className="bg-soapstone border border-t-transparent border-solid border-shadly-lady border-opacity-25 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <a
          href="https://culture-breathe-337021.framer.app/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={LogoIcon}
            className="h-6 p-1 rounded-lg bg-spring-wood"
            alt="Milton Logo"
          />

          <span className="self-center font-bold text-mine-shaft whitespace-nowrap">
            Milton
          </span>
        </a>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium text-base gap-10 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row">
            {navbarData.map((val, index) => (
              <li key={index}>
                <a
                  href={val.path}
                  className="block text-boulder font-bold hover:text-mine-shaft hover:underline"
                  aria-current="page"
                >
                  {val.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white text-base bg-spring-wood focus:outline-none font-bold rounded-lg px-4 py-2 text-center mr-3 hover:scale-110 transform-cpu"
          >
            Log in
          </button>

          <button
            type="button"
            className="text-spring-wood bg-mine-shaft focus:outline-none font-bold rounded-lg text-base px-4 py-2 text-center hover:scale-110"
          >
            Get started
          </button>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
