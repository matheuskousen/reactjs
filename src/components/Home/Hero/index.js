import React from "react";
import Heroo from "./style";

function Hero() {
  return (
    <Heroo>
      <div className="container">
        <h1>Aprenda a ser criativo</h1>
        <p>
          Aprenda tecnologias interessantes de desenvolvimento web, design,
          desenvolvimento de jogos e muito mais!
        </p>

        <a href="/" className="btn">
          Inscreva-se agora
        </a>
      </div>
    </Heroo>
  );
}

export default Hero;
