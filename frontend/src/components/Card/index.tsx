import Test from "../../assets/test.png";
import Tag from "../Tag";
import { CardContainer } from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <img src={Test} alt="Imagem de site" />
      <div className="infos">
        <h4>Efood</h4>
        <p>
          Website estilo ifood blablabla lbalbba balblalbalabl albalb alba lbla
          blal bal blal bas da
        </p>
        <div className="tags">
          <div className="tags__list">
            <Tag />
            <Tag />
          </div>
          <div className="more">
            <span>+</span>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
