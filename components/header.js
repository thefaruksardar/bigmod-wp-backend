"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FiX } from "react-icons/fi";
import {
  HiMiniMagnifyingGlass,
  HiOutlineMagnifyingGlass,
  HiOutlineXMark,
} from "react-icons/hi2";

const Header = () => {
  const [isNav, setisNav] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [headerHeight, setHeaderHeight] = useState("");
  const [navHeight, setNavHeight] = useState("");
  const [navWidth, setNavWidth] = useState();
  const HeaderRef = useRef(null);
  const inputRef = useRef(null);
  const navRef = useRef(null);
  const router = useRouter();

  useLayoutEffect(() => {
    setHeaderHeight(HeaderRef.current.offsetHeight);
    if (isNav) {
      setNavWidth(navRef.current.offsetWidth);
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [isNav]);

  useEffect(() => {
    if (searchVisible) {
      inputRef.current.focus();
    }
    // Disable scrolling when the overlay is enabled
    if (searchVisible || isNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchVisible, isNav, headerHeight]);

  useOutsideClick(navRef, () => {
    setisNav(false);
  });

  const clearSearch = (e) => {
    e.preventDefault();
    setSearchValue("");
  };
  const handleSearchIconClick = () => {
    setSearchVisible(!searchVisible);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const trimmedQuery = searchValue.trim();

    if (trimmedQuery !== "") {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
    setSearchVisible(false);
    setSearchValue("");
  };

  return (
    <header className="bg-white shadow relative">
      <div className="lg:max-w-6xl lg:m-auto" ref={HeaderRef}>
        <nav className="bg-white border-gray-200 relative ">
          <div className=" max-w-screen-xl flex items-center justify-between mx-auto px-3 py-3 relative lg:px-0">
            {searchVisible ? (
              <form
                onSubmit={(e) => searchHandler(e)}
                className="w-full mr-2 relative flex items-center border rounded-2xl"
              >
                <input
                  ref={inputRef}
                  placeholder="Search for Games, Apps"
                  className=" w-full text-gray-700 py-[0.55rem] px-3 text-sm rounded-2xl placeholder:text-sm focus:outline-none"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <span
                  onClick={(e) => clearSearch(e)}
                  className="absolute top-[50%] right-[13%] translate-y-[-50%] text-xl md:right-[8%] lg:right-[4%]"
                >
                  <HiOutlineXMark />
                </span>
                <button className="mr-2 p-[0.35rem] rounded-full bg-mainlight text-white flex justify-center items-center ">
                  <HiOutlineMagnifyingGlass />
                </button>
              </form>
            ) : (
              <>
                <Link href="/" className="flex items-center not-a">
                  <div className="text-2xl bg-white md:max-w-lg mx-auto lg:max-w-4xl flex items-center">
                    <Image
                      src="/bigmod.svg"
                      alt="bigmod.io Logo"
                      title="bigmod.io Logo"
                      width={50}
                      height={120}
                      className="max-w-8 max-h-8"
                    />
                    BIGMOD
                  </div>
                </Link>
                <div className="flex justify-center items-center gap-3">
                  <ul className="hidden not-ul lg:flex lg:gap-6">
                    <li>
                      <Link
                        href="/"
                        className="not-a block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/games"
                        className="not-a block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      >
                        Games
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/apps"
                        className="not-a block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      >
                        Apps
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/articles?page=1"
                        className="not-a block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                      >
                        Articles
                      </Link>
                    </li>
                  </ul>

                  <button onClick={(e) => handleSearchIconClick()}>
                    <HiMiniMagnifyingGlass className="text-xl text-gray-500" />
                  </button>
                  {!isNav ? (
                    <button
                      data-collapse-toggle="navbar-default"
                      type="button"
                      className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
                      aria-controls="navbar-default"
                      aria-expanded="false"
                      onClick={(e) => setisNav(!isNav)}
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  ) : (
                    <button className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden">
                      <FiX className="text-2xl" />
                    </button>
                  )}
                </div>
                {isNav && (
                  <div
                    ref={navRef}
                    className={`${
                      isNav ? "" : "hidden"
                    } absolute  w-full right-[50%] translate-x-[50%] z-50 md:flex md:justify-end lg:block`}
                    style={{ top: `calc(${headerHeight}px)` }}
                  >
                    <ul className="headnav font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:gap-4 md:min-w-[50%] md:px-6 md:py-6 md:min-h-screen">
                      <li>
                        <Link
                          href="/"
                          className="not-a block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                          aria-current="page"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/category/games"
                          className="not-a block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                        >
                          Games
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/category/apps"
                          className="not-a block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                        >
                          Apps
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/articles?page=1"
                          className="not-a block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                        >
                          Articles
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </nav>
        {searchVisible && (
          <div
            onClick={(e) => setSearchVisible(!searchVisible)}
            className={`absolute left-0 w-screen bg-gray-500 opacity-30  z-50`}
            style={{ height: `calc(100vh - ${headerHeight}px)` }}
          />
        )}
        {isNav && (
          <div
            onClick={(e) => setisNav(!isNav)}
            className={`absolute w-screen h-screen bg-gray-500 opacity-30 z-50`}
            // style={{
            //   height: `calc(100vh - ${headerHeight + navHeight}px)`,
            // }}
            // style={{ height: `calc(100vh - ${headerHeight} - ${navHeight}px)` }}
            style={{
              right: navWidth < 768 ? 0 : navWidth / 2,
              top: navWidth < 768 ? navHeight + 40 : 0,
              // display: navWidth >= 768 ? "block" : "none",
            }}
          ></div>
        )}
      </div>
    </header>
  );
};
export default Header;
