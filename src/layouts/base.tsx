import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { search } from "../functions/apiService";
import type { components } from "../apischema";

type SearchResult = components["schemas"]["SearchResult"];

type NavSubItem = { label: string; to: string };
type NavItem = { label: string; to?: string; submenu?: NavSubItem[] };

const navElements: NavItem[] = [
  {
    label: "Browse",
    submenu: [
      { label: "Boardgames", to: "/browse/boardgame/" },
      { label: "Categories", to: "/browse/categories" },
      { label: "Designers", to: "/browse/designers" },
      { label: "Families", to: "/browse/families" },
      { label: "Mechanics", to: "/browse/mechanics" },
    ],
  },
  {
    label: "Networks",
    submenu: [
      { label: "Boardgames", to: "/network/boardgames" },
      { label: "Categories", to: "/network/categories" },
      { label: "Designers", to: "/network/designers" },
      { label: "Families", to: "/network/families" },
      { label: "Mechanics", to: "/network/mechanics" },
    ],
  },
];

// --- helper to fetch search results through your apiService ---
async function fetchSearchResults(
  query: string,
  limit = 5,
): Promise<SearchResult[]> {
  const req = new Request(
    `http://localhost/search?query=${encodeURIComponent(query)}&limit=${limit}`,
  );
  try {
    const { data } = await search({ request: req });
    return Array.isArray(data) ? (data as SearchResult[]) : [];
  } catch (e) {
    console.error("Search failed:", e);
    return [];
  }
}

type BaseLayoutProps = { children?: ReactNode };

export default function BaseLayout({ children }: BaseLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Dropdown states
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const desktopMenuRef = useRef<HTMLDivElement>(null);

  // Close menus & search on route change
  useEffect(() => {
    setDesktopOpen(null);
    setMobileOpen(false);
    setShowResults(false);
  }, [location]);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(e.target as Node)
      ) {
        setDesktopOpen(null);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Debounced live search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }
    const handle = setTimeout(async () => {
      const data = await fetchSearchResults(searchTerm.trim(), 8);
      setResults(data);
      setShowResults(true);
    }, 250);
    return () => clearTimeout(handle);
  }, [searchTerm]);

  // Ensure suggestion box is above everything
  const suggestionsVisible = useMemo(
    () => showResults && results.length > 0,
    [showResults, results],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(false);
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm z-50">
        <div className="navbar-start">
          {/* Mobile hamburger + dropdown */}
          <div className={`dropdown ${mobileOpen ? "dropdown-open" : ""}`}>
            <button
              type="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={mobileOpen}
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
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-56 p-2 shadow z-50"
              role="menu"
            >
              {navElements.map((item) =>
                item.submenu ? (
                  <li key={item.label}>
                    <details>
                      <summary>{item.label}</summary>
                      <ul>
                        {item.submenu.map((sub) => (
                          <li key={sub.to}>
                            <NavLink
                              to={sub.to}
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.label}>
                    <NavLink to={item.to!} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
              <li className="mt-2">
                <a href="https://boardgamegeek.com/" target="_blank">
                  <img
                    alt="powered by BGG logo"
                    className="object-contain w-32"
                    src="/powered_by_bgg.webp"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="btn btn-ghost btn-primary text-xl">
            saboga
          </Link>

          {/* Desktop menu */}
          <div className="navbar hidden md:block" ref={desktopMenuRef}>
            <ul className="navbar-start menu menu-horizontal px-1">
              {navElements.map((item) =>
                item.submenu ? (
                  <li
                    key={item.label}
                    className={`dropdown dropdown-bottom ${desktopOpen === item.label ? "dropdown-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="btn btn-ghost rounded-none"
                      onClick={() =>
                        setDesktopOpen((v) =>
                          v === item.label ? null : item.label,
                        )
                      }
                      aria-haspopup="menu"
                      aria-expanded={desktopOpen === item.label}
                    >
                      {item.label}
                    </button>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content bg-base-100 rounded-box mt-1 p-2 shadow z-50 w-56"
                      role="menu"
                    >
                      {item.submenu.map((sub) => (
                        <li key={sub.to}>
                          <NavLink
                            to={sub.to}
                            onClick={() => setDesktopOpen(null)}
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <NavLink to={item.to!}>{item.label}</NavLink>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="navbar-center"></div>

        {/* Search */}
        <div className="navbar-end">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="relative">
              <input
                type="search"
                className="input input-bordered w-full max-w-96 pl-10"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => results.length > 0 && setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 120)}
                aria-label="Search games"
              />
              <svg
                className="h-5 w-5 opacity-60 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </div>

            {suggestionsVisible && (
              <ul className="absolute z-50 bg-base-100 shadow-md mt-1 w-full rounded-box max-h-60 overflow-y-auto">
                {results.map((game) => (
                  <li key={game.bgg_id} className="p-2 hover:bg-base-200">
                    <Link
                      to={`/boardgame/${game.bgg_id}`}
                      onClick={() => setShowResults(false)}
                    >
                      {game.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </form>

          <div className="hidden md:block h-full ml-4">
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
      <main className="pt-8 pb-8 px-4 mx-auto max-w-7xl min-h-screen">
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
            ,{" "}
            <a href="https://tailwindcss.com" className="link link-hover">
              TailwindCSS
            </a>
            , and{" "}
            <a href="https://daisyui.com/" className="link link-hover">
              DaisyUI
            </a>
          </p>
        </aside>
      </footer>

      <ScrollRestoration />
    </div>
  );
}
