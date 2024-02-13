import React from "react";
import "./Sukuna.scss";
import Language from "../Localization/Localization";

function Sukuna({ Lang }) {
  return (
    <>
      <section className="sukuna">
        <div className="container">
          <div class="page-content">
            <div class="inner-content">
              <h1 class="heading">Sukuna</h1>
              <p className="text">{Language[Lang].sukunaLag.sukunaText}</p>
              <div class="buttons">
                <a href="#link" class="active">
                  {Language[Lang].sukunaLag.learn}
                </a>
                <a href="#link">
                {Language[Lang].sukunaLag.browse}
                </a>
              </div>

              <div class="social-links">
                <a href="#link" class="link_s">
                  facebook
                </a>
                <a href="#link" class="link_s">
                  YouTube
                </a>
                <a href="#link" class="link_s">
                  instagram
                </a>
                <a href="#link" class="link_s">
                  linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sukuna;
