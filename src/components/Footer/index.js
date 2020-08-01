import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/logoCastroFlix.png'

function Footer() {
  return (
    <FooterBase>
       <img className="Logo" src={Logo} alt="CastroFlixLogo" />
     
    </FooterBase>
  );
}

export default Footer;
