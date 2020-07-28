import React from "react";
import Logo from "../../assets/logoCastroFlix.png"
import Button from '../Button'
//import ButtonLink from "./components/ButtonLink";
import "./Menu.css";
import { Link } from 'react-router-dom';

 
export default props => (
    <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="CastroFlixLogo" />
    </Link>
    <Button  className="ButtonLink" to="/cadastro/video">
    Novo Video
    </Button>
  </nav>
)

