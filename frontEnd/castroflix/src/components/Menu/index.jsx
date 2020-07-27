import React from "react";
import Logo from "../../assets/logoCastroFlix.png"
import ButtonLink from "./components/ButtonLink";
import "./Menu.css";

 
export default proos => (
    <nav className="Menu">
    <a href="/">
      <img className="Logo" src={Logo} alt="CastroFlixLogo" />
    </a>
    <ButtonLink className="ButtonLink" href=" ">
    Novo Video
    </ButtonLink>
  </nav>
)

