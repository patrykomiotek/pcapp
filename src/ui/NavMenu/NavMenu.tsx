import { Montserrat } from "next/font/google";

import { NavLink } from "./NavLink";
import { ThemeSwitcher } from "../ThemeSwitcher";

const montserrat = Montserrat({ subsets: ["latin"] });

export const NavMenu = () => {
  return (
    <nav className={`container mb-4 ${montserrat.className}`}>
      <ul className="flex">
        <li className="mr-4">
          <NavLink href="/">Home</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/reviews">Reviews</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/members">Members</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/about-us">About</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/contact-us">Contact</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/dashboard">Dashboard</NavLink>
        </li>
        <li className="mr-4">
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};
