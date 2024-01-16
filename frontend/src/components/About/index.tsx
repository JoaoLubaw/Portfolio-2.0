import { AboutContainer } from "./style";

import Instagram from "../../assets/Insta.svg";
import Download from "../../assets/Download.svg";

const About = () => {
  return (
    <AboutContainer className="container">
      <div className="texts">
        <h1>Quem sou?</h1>
        <div className="part1">
          <p>
            ‎ ‎ ‎ ‎ Além de escritor, sempre fui apaixonado pela tecnologia,
            desde novo já me encantava pelas inovações que ano após ano surgiram
            no mundo (principalmente no universo dos Games).
          </p>
          <p>
            ‎ ‎ ‎ ‎ Mas foi só após terminar o ensino médio que eu evidentemente
            abri meus olhos para todo o potencial que os códigos possuem, o
            poder de livre criação, de transformação.
          </p>
          <p>
            ‎ ‎ ‎ ‎ Hoje já concluí um curso profissionalizante de Desenvolvedor
            Full Stack Python pela Escola Britânica de Artes Criativas (EBAC) e
            ingressei em um curso superior CST em Análise e Desenvolvimento de
            Sistemas (Católica de Santa Catarina).
          </p>
        </div>

        <div className="division">
          <div className="part2">
            <p>
              ‎ ‎ ‎ ‎ A vida anda em constante movimento, o mundo se expande, os
              horizontes se abrem e a tecnologia se reinventa (mas nunca
              sozinha).
            </p>
            <p>
              ‎ ‎ ‎ ‎ Trans(formar)-se em conjunto, agregar à unidade e ao
              coletivo, seja nas telas, nos livros ou nos corações, esse é meu
              objetivo.
            </p>
          </div>

          <img
            className="GitStatus"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoaoLubaw&layout=compact&langs_count=7&theme=dracula"
            alt="Porcentagem de linguagens em projetos GitHub"
          />
        </div>
      </div>
      <div className="links">
        <a className="link" href="@">
          <img className="svg" src={Download} alt="Instagram" />{" "}
          <h4>Baixar curriculo</h4>
        </a>

        <a className="link" href="@">
          <img className="svg" src={Instagram} alt="Download" />
          <h4>@po.hematomas</h4>
        </a>
      </div>
    </AboutContainer>
  );
};

export default About;
