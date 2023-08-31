import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  { to: "/", label: "Sign In" },
  { to: "/legal", label: "Legal" },
  { to: "/licenses", label: "Licenses" },
  { to: "/security", label: "Security" },
  { to: "/careers", label: "Careers" },
  { to: "/press", label: "Press" },
  { to: "/support", label: "Support" },
  { to: "/status", label: "Status" },
  { to: "/codeblog", label: "Code Blog" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="header">
      <div className="menu" onClick={toggleMenu}>
        <GiHamburgerMenu size={30} />
      </div>
      <div className={isMenuOpen ? "mob-menu" : "header-content"}>
        {links.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Header;
