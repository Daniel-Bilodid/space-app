import { React, useState } from "react";
import "./destination.scss";
import data from "../../data.json";
import Nav from "../nav/Nav";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";
const Destination = () => {
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);

  const { name, description, distance, travel } = planets[value];

  const imgArr = [moon, mars, europa, titan];

  return (
    <div className="dest">
      <Nav></Nav>

      <div className="dest__title">
        <div className="dest__title-wrapper">
          <span>01</span>
          Pick your destination
        </div>
      </div>

      <div className="planet__info">
        <div className="planet__info-wrapper">
          <div className="planet__info-img">
            <img src={imgArr[value]} alt={name} title={name} />
          </div>

          <div className="planet__info-text">
            <ul className="planet__info-list">
              {planets.map((item, index) => (
                <li
                  key={index}
                  className={`planet__info-item ${
                    index === value && "active__dest"
                  }`}
                  onClick={() => setValue(index)}
                >
                  {item.name}
                </li>
              ))}
            </ul>

            <div className="planet__info-title">{name}</div>

            <div className="planet__info-descr">{description}</div>

            <div className="planet__info-hr"></div>

            <div className="planet__info-distance">
              <div className="planet__info-avg">
                <span>AVG. DISTANCE</span>
                {distance}
              </div>

              <div className="planet__info-travel">
                <span>Est. travel time</span>
                <div className="travel__time">{travel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
