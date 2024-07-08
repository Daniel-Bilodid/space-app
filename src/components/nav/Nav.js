import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/shared/logo.svg";
import "./nav.scss";
const Nav = () => {
  const [isActive, setIsActive] = useState(false); // Используем useState для хранения состояния активности меню
  const [isBurger, setIsBurger] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
    setIsBurger(!isBurger); // Инвертируем состояние активности меню при клике
  };

  return (
    <nav>
      <div className="nav">
        <motion.div
          className={`nav__burger ${isBurger ? "active" : ""}`}
          initial={{ x: "100%" }}
          animate={{ x: isBurger ? 0 : "100%" }}
          transition={{ duration: 0.8 }}
        >
          <div className="nav__burger-link">
            <div className="nav__burger-route">
              <Link to={"/"} className="burger__route-link">
                <span>00</span>Home{" "}
              </Link>
            </div>

            <div className="nav__burger-route">
              <Link to={"/destination"} className="burger__route-link">
                {" "}
                <span>01</span>Destination{" "}
              </Link>
            </div>

            <div className="nav__burger-route">
              <Link to={"/crew"} className="burger__route-link">
                {" "}
                <span>02</span>Crew{" "}
              </Link>
            </div>

            <div className="nav__burger-route">
              <Link to={"/tech"} className="burger__route-link">
                {" "}
                <span>03</span>Technology{" "}
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="nav__wrapper">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav__menu-burger">
            <div className="menu" onClick={toggleMenu}>
              <div
                className={`menu-top ${isActive ? "menu-top-click" : ""}`}
              ></div>
              <div
                className={`menu-middle ${isActive ? "menu-middle-click" : ""}`}
              ></div>
              <div
                className={`menu-bottom ${isActive ? "menu-bottom-click" : ""}`}
              ></div>
            </div>
          </div>

          <div className="nav__bar">
            <div className="hr"></div>
            <ul className="nav__list">
              <li className="nav__list-item active">
                {" "}
                <Link to={"/"} className="route__link">
                  <span>00</span>Home{" "}
                </Link>
              </li>
              <li className="nav__list-item">
                {" "}
                <Link to={"/destination"} className="route__link">
                  {" "}
                  <span>01</span>Destination{" "}
                </Link>
              </li>
              <li className="nav__list-item">
                {" "}
                <Link to={"/crew"} className="route__link">
                  {" "}
                  <span>02</span>Crew{" "}
                </Link>
              </li>
              <li className="nav__list-item">
                {" "}
                <Link to={"/tech"} className="route__link">
                  {" "}
                  <span>03</span>Technology{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
