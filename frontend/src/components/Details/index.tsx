import Test from "../../assets/test2.png";
import Tag from "../Tag";
import { DetaisContainer } from "./styles";

const Details = () => {
  return (
    <DetaisContainer>
      <img src={Test} alt="Imagem do site" />
      <div className="infos">
        <div className="infos--details">
          <h2>Efood</h2>
          <p>
            Website estilo ifood blablabla lbalbba balblalbalabl albalb alba
            lbla blal bal blal bas da ifood blablabla lbalbba balblalbalabl
            albalb alba lbla blal bal blal bas da ifood blablabla lbalbba
            balblalbalabl albalb alba lbla blal bal blal bas da ifood blablabla
            lbalbba balblalbalabl albalb alba lbla blal bal blal bas da ifood
            blablabla lbalbba balblalbalabl albalb alba lbla blal bal blal bas
            da ifood blablabla lbalbba balblalbalabl albalb alba lbla blal bal
            blal bas da ifood blablabla lbalbba balblalbalabl albalb alba lbla
            blal bal blal bas da
          </p>

          <div className="tags">
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>

        <div className="buttons">
          <a href="@">
            <button>Visitar</button>
          </a>
          <a href="@">
            <button>Github</button>
          </a>
        </div>
      </div>
    </DetaisContainer>
  );
};

export default Details;
