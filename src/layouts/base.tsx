import {Link, NavLink, Outlet, ScrollRestoration} from "react-router-dom";

function BaseLayout() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col">
                    <div className="w-full sm:pr-10 border-b z-20 border-base-200 backdrop-blur-xl navbar sticky top-0">
                        <div className="navbar-start">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar"
                                   className="btn btn-square btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                            <a className="btn btn-ghost lg:hidden">
                                <div className="font-title text-lg md:text-2xl">
                                    <Link to={`/`}>saboga</Link>
                                </div>
                            </a>
                            <div className="hidden w-full max-w-sm relative lg:flex"></div>
                        </div>
                        <div className="navbar-center"></div>
                        <div className="navbar-end">
                        </div>
                    </div>
                    <main className="pt-8 pb-8 px-4 max-w-screen-lg min-h-screen">
                        <Outlet />
                    </main>
                    <div className="divider"></div>
                    <footer className="footer footer-center pt-0.5 p-10">
                        <aside>
                            <p>made with <a href="https://react.dev/" className="link link-hover">React</a>, <a href="https://tailwindcss.com" className="link link-hover">TailwindCSS</a> and <a href="https://daisyui.com/" className="link link-hover">DaisyUI</a></p>
                        </aside>
                    </footer>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="px-4 py-2">
                        <a className="btn btn-ghost px-2">
                            <div className="font-title text-lg">
                                <Link to={`/`}>saboga</Link>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <ul className="menu px-4 py-2 w-80 min-h-full bg-base-200 lg:bg-base-100">
                            <li><NavLink to={`/browse/boardgame/`}>Browse</NavLink></li>
                        </ul>
                        <div className="pt-5">
                            <a href="https://boardgamegeek.com/" target="_blank">
                                <img alt="powered by BGG logo" className="object-contain w-32"
                                     src="/powered_by_bgg.webp"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollRestoration/>
        </div>
    )
}

export default BaseLayout
