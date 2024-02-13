import React from "react";
import Right from "../Video/footer.png";
import "./Footer.scss";
import Language from "../Localization/Localization";

function Footer({ Lang }) {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <h5 className="footer__heading">{Language[Lang].Footer.loop}</h5>
            <form className="footer__email">
              <input
                className="footer__input"
                type="email"
                placeholder="Enter email"
              />
              <img
                className="footer__img"
                type="submit"
                src={Right}
                alt="right"
                width={20}
                height={20}
              />
            </form>
            <p className="footer__text">
              {Language[Lang].Footer.by}{" "}
              <span className="footer__span">{Language[Lang].Footer.span3}</span>{" "}
              {Language[Lang].Footer.by2 }
            </p>
            <p className="footer__data">{Language[Lang].Footer.data}</p>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#link">{Language[Lang].header.nav.userLink1}</a>
              </li>
              <li>
                <a href="#link">{Language[Lang].header.nav.userLink2}</a>
              </li>
              <li>
                <a href="#link">{Language[Lang].header.nav.userLink3}</a>
              </li>
              <li>
                <a href="#link">{Language[Lang].header.nav.userLink4}</a>
              </li>
              <li>
                <a href="#link">{Language[Lang].header.nav.userLink5}</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
