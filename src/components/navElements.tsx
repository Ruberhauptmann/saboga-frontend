import { NavLink } from "react-router-dom";

type NavElementsProps = {
    className?: string;
    tabIndex?: number;
};

export default function NavElements({ className, tabIndex }: NavElementsProps) {
  return (
    <ul className={`${className} overflow-visible`}>
      <li>
        <details>
          <summary>Browse</summary>
          <ul className="p-2 bg-base-200 rounded-box">
            <li>
              <NavLink to="/browse/boardgame/">Browse boardgames</NavLink>
            </li>
            <li>
              <NavLink to="/browse/categories/">Browse categories</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to="/network/designers">Designers</NavLink>
      </li>
    </ul>
  );
}
