import { React, useState } from "react";
import "./tech.scss";
import Nav from "../nav/Nav";
import launch from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import data from "../../data.json";
import launchLand from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportLand from "../../assets/technology/image-spaceport-landscape.jpg";
import capsuleLand from "../../assets/technology/image-space-capsule-landscape.jpg";
const Tech = () => {
  const [tech] = useState(data.technology);
  const [value, setValue] = useState(1);

  const { name, description } = tech[value];

  const imgArr = [launch, spaceport, capsule];
  const imgLand = [launchLand, spaceportLand, capsuleLand];

  return (
    <div className="tech">
      <Nav></Nav>
      <div className="tech__title">
        <span>02</span>
        SPACE LAUNCH 101
      </div>

      <img className="tech__land" src={imgLand[value]} alt="" />
      <div className="tech__wrapper">
        <div className="tech__info-wrapper">
          <div className="tech__btn-list">
            {tech.map((item, index) => (
              <button
                key={index}
                className={`tech__btn-item ${index === value && "active-tech"}`}
                onClick={() => setValue(index)}
              >
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
          <div className="wrapper__tech">
            <div className="tech__name">THE TERMINOLOGY…</div>

            <div className="tech__subtitle">{name}</div>

            <div className="tech__descr">{description}</div>
          </div>
        </div>

        <div className="tech__img">
          <img className="tech__img" src={imgArr[value]} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Tech;
