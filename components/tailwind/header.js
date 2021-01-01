import { useState, useEffect } from "react";
import { headerList } from "./constants";
import SideOver from "./sideOver";

export default function Header() {
  const [showMobileView, setshowMobileView] = useState(false);
  const [showSideOver, setShowSideOver] = useState(false);
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const toggleMobileHeader = (value) => {
    setshowMobileView(value);
  };

  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            {showSideOver && <SideOver setShowSideOver={setShowSideOver} />}

            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => toggleMobileHeader(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              {headerList.map((el) => {
                return (
                  <a
                    href={`${el.redirect}`}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    {el.title}
                  </a>
                );
              })}
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => setShowSideOver(true)}
              >
                More
              </button>
            </div>
          </div>
        </div>
        {showMobileView && (
          <div
            className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => toggleMobileHeader(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {headerList.map((el) => {
                      return (
                        <a
                          href={`${el.redirect}`}
                          className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                          {el.title}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
