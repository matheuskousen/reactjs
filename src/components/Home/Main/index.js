import React from "react";
import { StyleMain } from "./style";

import office from "../../../assets/office.jpg";
import perfil from "../../../assets/perfil.jpg";

const Main = () => {
  return (
    <StyleMain>
      <div className="comtaomer">
        <h1>Cursos em destaque</h1>
        <div className="cards">
          <div className="card">
            <img src={office} alt="office cursos completo" />
            <div className="card-body">
              <h2>Curso de Office completo</h2>
              <p>Aprenda o pacote Office completo e saia com uma profissão.</p>
              <div className="perfil">
                <div>
                  <img src={perfil} alt="perfil eagles consultoria" />
                  <p> Eagles consultoria</p>
                </div>
                <div>$20</div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={office} alt="office cursos completo" />
            <div className="card-body">
              <h2>Curso de Office completo</h2>
              <p>Aprenda o pacote Office completo e saia com uma profissão.</p>
              <div className="perfil">
                <div>
                  <img src={perfil} alt="perfil eagles consultoria" />
                  <p> Eagles consultoria</p>
                </div>
                <div>$20</div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={office} alt="office cursos completo" />
            <div className="card-body">
              <h2>Curso de Office completo</h2>
              <p>Aprenda o pacote Office completo e saia com uma profissão.</p>
              <div className="perfil">
                <div>
                  <img src={perfil} alt="perfil eagles consultoria" />
                  <p> Eagles consultoria</p>
                </div>
                <div>$20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleMain>
  );
};

export default Main;
