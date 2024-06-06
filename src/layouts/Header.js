import { useEffect, useState } from "react";
import { scroll_, stickyNav } from "../utilits";

const Header = ({ dark }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsAtTop(currentScrollY === 0);
      lastScrollY = currentScrollY;
    };

    let lastScrollY = window.pageYOffset;

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scroll_);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", stickyNav);
      window.removeEventListener("scroll", scroll_);
    };
  }, []);

  return (
    <div className={`aali_tm_header ${isVisible ? "visible" : "hidden"} ${isAtTop ? "at-top" : ""}`}>
      <div className="container">
        <div className="inner">
          {dark ? (
            <div className="logo">
              <a href="#">
                <img src="img/logo/logosmallpurple.png" alt="" />
              </a>
            </div>
          ) : (
            <div className="logo">
              <a className="light" href="#">
                <img src="img/logo/logo.png" alt="aali image" />
              </a>
              <a className="dark" href="#">
                <img src="img/logo/dark.png" alt="aali image" />
              </a>
            </div>
          )}

          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
             
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
