import { Link, NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import {ReactNode} from "react";

type BaseLayoutProps = {
    children?: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <div>
            <div>
                {/* Navbar */}
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <Link to="/" className="btn btn-ghost btn-primary text-xl">saboga</Link>
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to="/browse/boardgame/">Browse</NavLink></li>
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                        <a href="https://boardgamegeek.com/" target="_blank">
                            <img alt="powered by BGG logo" className="object-contain w-32"
                                 src="/powered_by_bgg.webp"/>
                        </a>
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
                            made with <a href="https://react.dev/" className="link link-hover">React</a>,
                            <a href="https://tailwindcss.com" className="link link-hover"> TailwindCSS</a>, and
                            <a href="https://daisyui.com/" className="link link-hover"> DaisyUI</a>
                        </p>
                    </aside>
                </footer>
            </div>

            <ScrollRestoration/>
        </div>
    );
}
