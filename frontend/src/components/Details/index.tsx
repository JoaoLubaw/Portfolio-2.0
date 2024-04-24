import { useEffect, useState } from "react";
import Tag from "../Tag";
import { DetailsContainer } from "./styles";

interface Props {
  id: number;
  Imagem: string;
  name: string;
  desc: string;
  tags: string[];
  link: string;
  git: string;
  linkback: string | undefined;
  gitback: string | undefined;
}

const Details = ({
  desc,
  git,
  gitback,
  id,
  link,
  linkback,
  name,
  tags,
  Imagem,
}: Props) => {
  return (
    <DetailsContainer className="container" key={id}>
      <img src={Imagem} alt="Imagem do site" />
      <div className="infos">
        <div className="infos--details">
          <h2>{name}</h2>
          <p>{desc}</p>

          <div className="tags">
            {tags.map((tag) => (
              <Tag name={tag} key={tag} />
            ))}
          </div>
        </div>

        <div className="buttons">
          <a href={link} target="_blank" rel="noreferrer">
            <button>Visitar</button>
          </a>
          <a href={git} target="_blank" rel="noreferrer">
            <button>Github</button>
          </a>
        </div>
      </div>
    </DetailsContainer>
  );
};

export default Details;
