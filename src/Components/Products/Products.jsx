import React from "react";
import SukunaImg from "../Video/sukuna.jpg";
import "./Products.scss";
import Language from "../Localization/Localization";

function Products({ Lang }) {
  return (
    <>
      <section className="products">
        <div className="container">
          <img
            className="products__img"
            src={SukunaImg}
            alt="img"
            width={600}
            height={400}
          />
          <div className="products__info">
            <h4 className="products__title">Jujutsu Kaisen</h4>
            <h2 className="products__heading">Sukuna</h2>
            <h4 className="products__comment">
              {Language[Lang].products.comment}
            </h4>
            <h4 className="products__comment">
              {Language[Lang].products.comment2}
            </h4>
            <p className="products__price products__comment">$100.00</p>
            <button className="products__btn products__button">
              {Language[Lang].products.button}
            </button>
            <h4 className="products__comment">
              {Language[Lang].products.comment3}
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
