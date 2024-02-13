import React from "react";
import Video from "../Video/Sukuna.mp4";
import "./Header.scss";
import Language from "../Localization/Localization";

function Header({ Lang, SetLang }) {
  return (
    <>
      <video src={Video} autoPlay loop muted></video>
      <nav class="navbar">
        <div class="container">
          <a href="#link" class="logo">
          {Language[Lang].header.logo.nameLogo}
          </a>
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

            <select
              className="select"
              value={Lang}
              onChange={(evt) => SetLang(evt.target.value)}
            >
              <option className="option" value="en">
                EN
              </option>
              <option className="option" value="uz">
                UZ
              </option>
              <option className="option" value="ru">
                RU
              </option>
              <option className="option" value="jp">
                JP
              </option>
              <option className="option" value="kh">
                KH
              </option>
            </select>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
