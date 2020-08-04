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
    <div>

    <Button  className="ButtonLink" to={"/"}>
    Home
    </Button>
    <Button  className="ButtonLink" to={'/cadastro/video'}>
    register video
    </Button>
    <Button  className="ButtonLink" to={'/cadastro/categoria'}>
    register category
    </Button>
    </div>
  </nav>
)

