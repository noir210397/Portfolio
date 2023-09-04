// import { useContext } from "react";
import { Clear, Cookie, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
// import { ThemeContext } from "../context/ThemeContext";

const Nav = tw.nav`flex justify-between items-center px-4 py-2 bg-rose-500  text-white`;
const Logo = tw.div`text-xl font-extrabold cursor-pointer text-slate-950`;
const NavLinks = tw.ul` pt-[10vh]  lg:pt-0 flex flex-col gap-2 lg:transform-none lg:flex-row lg:relative fixed inset-y-0 start-0 end-2/4 bg-white lg:bg-transparent transition-transform ${(
  p
) => (p.$isOpen ? "transform-none" : " -translate-x-full")}  `;
const ThemeButton = tw.button`text-xl lg:hidden `;
const List = tw.li`p-2 text-rose-500 hover:underline decoration-2 decoration-white lg:decoration-transparent lg:text-white lg:hover:bg-white lg:hover:text-black rounded transition-all cursor-pointer`;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawer = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  return (
    <header className="fixed w-full top-0 z-10" id="header">
      <Nav>
        <Logo>PortFolio.</Logo>
        <NavLinks $isOpen={isOpen}>
          <button
            onClick={drawer}
            className="p-2 lg:hidden absolute right-3 text-rose-500 top-3 text-xl"
          >
            <Clear />
          </button>
          <a href="#home">
            <List>{/* <Link>Home</Link> */} Home</List>
          </a>
          <a href="#contact">
            <List>
              {/* <Link>Contact</Link> */}
              Contact
            </List>
          </a>
          <a href="#about">
            <List>{/* <Link>About Me</Link> */}About Me</List>
          </a>
          <a href="#services">
            <List>{/* <Link>Services</Link> */}Services</List>
          </a>
          <a href="">
            <List>{/* <Link>Portfolio</Link> */}Portfolio</List>
          </a>
        </NavLinks>
        <ThemeButton onClick={drawer}>
          <Menu />
        </ThemeButton>
      </Nav>
    </header>
  );
};

export default Header;
