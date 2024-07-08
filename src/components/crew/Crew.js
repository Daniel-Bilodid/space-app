import { React, useState } from "react";
import "./crew.scss";

import { motion } from "framer-motion";
import Nav from "../nav/Nav";
import data from "../../data.json";

import commander from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";

import victor from "../../assets/crew/image-victor-glover.png";

import ansari from "../../assets/crew/image-anousheh-ansari.png";
const Crew = () => {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);

  const { name, role, bio } = crew[value];

  const imgArr = [commander, mark, victor, ansari];

  return (
    <div className="crew">
      <Nav />
      <div className="crew__title">
        <span>02</span>
        Meet your crew
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="crew__phone-img"
      >
        <img src={imgArr[value]} alt={name} />
      </motion.div>
      <div className="hr__phone"></div>
      <div className="crew__wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="crew__descr-wrapper"
        >
          <div className="crew__job">{role}</div>
          <div className="crew__name">{name}</div>

          <div className="crew__descr">{bio}</div>

          <div className="crew__btn">
            <div className="crew__btn-list">
              {crew.map((item, index) => (
                <button
                  key={index}
                  className={`crew__btn-item ${
                    index === value && "active__crew "
                  }`}
                  onClick={() => setValue(index)}
                ></button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="crew__img"
      >
        <img src={imgArr[value]} alt={name} />
      </motion.div>
    </div>
  );
};

export default Crew;
