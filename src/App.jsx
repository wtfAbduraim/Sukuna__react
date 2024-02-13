import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Sukuna from "./Components/Sukuna/Sukuna";
import Products from "./Components/Products/Products";
import Plans from "./Components/Plans/Plans";
import Footer from "./Components/Footer/Footer";

function App() {
  const [Lang, Setlang] = React.useState("en");
  return (
    <>
      <Header Lang={Lang} SetLang={Setlang} />
      <Sukuna Lang={Lang} />
      <Products Lang={Lang} />
      <Plans Lang={Lang}/>
      <Footer Lang={Lang} />
    </>
  );
}

export default App;
