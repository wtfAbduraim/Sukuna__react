import React from "react";
import "./Plans.scss";
import Ryomen from "../Video/ryomen.jpg";
import Gojo from "../Video/gojo.jpg";
import Language from "../Localization/Localization";

function Plans({ Lang }) {
  return (
    <>
      <section className="plans">
        <div className="container">
          <ul className="plans__list">
            <li className="plans__item">
              <h3 className="plans__heading">Ryomen Sukuna</h3>
              <p className="plans__text">
                {Language[Lang].Plans.the}{" "}
                <span className="plans__span">
                  {Language[Lang].Plans.span}{" "}
                </span>
                {Language[Lang].Plans.text}{" "}
              </p>
              <p className="plans__text plans__2">
                <span className="plans__span">
                  {Language[Lang].Plans.span2}{" "}
                </span>{" "}
                {Language[Lang].Plans.heading}{" "}
              </p>
              <img
                className="plans__img"
                src={Ryomen}
                alt="img"
                width={450}
                height={500}
              />
            </li>

            <li className="plans__item">
              <h3 className="plans__heading_2">Satoru Gojo</h3>
              <p className="plans__text">
                {Language[Lang].Plans2.the}{" "}
                <span className="plans__span">
                  {Language[Lang].Plans2.span}{" "}
                </span>
                {Language[Lang].Plans2.text}{" "}
              </p>
              <p className="plans__text plans__2">
                <span className="plans__span">
                  {" "}
                  {Language[Lang].Plans2.span2}{" "}
                </span>{" "}
                {Language[Lang].Plans2.heading}{" "}
              </p>
              <img
                className="plans__img"
                src={Gojo}
                alt="img"
                width={450}
                height={500}
              />
            </li>
          </ul>
          <div class="animation-wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Plans;
