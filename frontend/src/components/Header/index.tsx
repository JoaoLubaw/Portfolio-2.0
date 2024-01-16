import * as S from "./styles";

import EmailSVG from "../../assets/Email.svg";
import GitHubSVG from "../../assets/github.svg";
import LinkedinSVG from "../../assets/linkedin.svg";

interface Props {
  isMobile: boolean;
}

const Header: React.FC<Props> = ({ isMobile }: Props) => {
  return (
    <S.BackgroundImage isMobile={isMobile}>
      <S.Header>
        <div className="container">
          <div className="introduction">
            <h2>Prazer,</h2>
            <h1>João Lubawaski</h1>
            <h3>Desenvolvedor FullStack</h3>
          </div>
          <div className="links">
            <S.Link>
              <img src={GitHubSVG} className="svg" alt="Acessar Github" />
            </S.Link>
            <S.Link>
              <img src={LinkedinSVG} className="svg" alt="Acessar Linkedin" />
            </S.Link>
            <S.Link>
              <img src={EmailSVG} className="svg" alt="Enviar Email" />
            </S.Link>
          </div>
        </div>
      </S.Header>
    </S.BackgroundImage>
  );
};

export default Header;
