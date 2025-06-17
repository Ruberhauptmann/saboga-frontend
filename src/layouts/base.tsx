import {
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
  useNavigate,
} from "react-router-dom";
import React, { ReactNode, useEffect, useState } from "react";
import { search } from "../functions/apiService.tsx";
import type { components } from "../apischema";

const fetchSearchResults = async (query: string, limit = 5) => {
  const fakeRequest = new Request(
    `http://localhost/search?query=${query}&limit=${limit}`,
  );
  try {
    const { data } = await search({ request: fakeRequest });
    return data;
  } catch (err) {
    console.error("Failed to load search results", err);
    return [];
  }
};

type SearchResult = components["schemas"]["SearchResult"];

type BaseLayoutProps = {
  children?: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      const data = await fetchSearchResults(searchTerm);
      setResults(data);
      setShowDropdown(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDropdown(false);
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div>
      <div>
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/browse/boardgame/">Browse</NavLink>
                </li>

                <div className="h-full">
                  <a href="https://boardgamegeek.com/" target="_blank">
                    <img
                      alt="powered by BGG logo"
                      className="object-contain w-32"
                      src="/powered_by_bgg.webp"
                    />
                  </a>
                </div>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost btn-primary text-xl">
              saboga
            </Link>
            <div className="hidden md:block">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink to="/browse/boardgame/">Browse</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-end w-2/3">
            <form onSubmit={handleSubmit}>
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  className="grow"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </label>
              {showDropdown && results.length > 0 && (
                <ul className="absolute z-10 bg-base-100 shadow-md mt-1 w-full rounded-box max-h-60 overflow-y-auto">
                  {results.map((game: SearchResult) => (
                    <li key={game.bgg_id} className="p-2 hover:bg-base-200">
                      <Link
                        to={`/boardgame/${game.bgg_id}`}
                        onClick={() => setShowDropdown(false)}
                      >
                        {game.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </form>
            <div className="hidden md:block h-full">
              <a href="https://boardgamegeek.com/" target="_blank">
                <img
                  alt="powered by BGG logo"
                  className="object-contain w-32"
                  src="/powered_by_bgg.webp"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="pt-8 pb-8 px-4 max-w-full flex-grow">
          {children ? children : <Outlet />}
        </main>

        {/* Footer */}
        <div className="divider"></div>
        <footer className="footer footer-center pt-0.5 p-10">
          <aside>
            <p>
              made with{" "}
              <a href="https://react.dev/" className="link link-hover">
                React
              </a>
              ,
              <a href="https://tailwindcss.com" className="link link-hover">
                {" "}
                TailwindCSS
              </a>
              , and
              <a href="https://daisyui.com/" className="link link-hover">
                {" "}
                DaisyUI
              </a>
            </p>
          </aside>
        </footer>
      </div>

      <ScrollRestoration />
    </div>
  );
}
