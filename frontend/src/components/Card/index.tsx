import { useContext, useEffect, useState } from "react";
import Tag from "../Tag";
import { CardContainer } from "./styles";
import Details from "../Details";
import { MenuContext } from "../Menu";

interface Props {
  id: number;
  name: string;
  desc: string;
  tags: string[];
  link: string;
  git: string;
  linkback: string | undefined;
  gitback: string | undefined;
  showDetails: () => void;
  Imagem: string;
}

const Card = ({
  desc,
  git,
  gitback,
  id,
  link,
  linkback,
  name,
  tags,
  showDetails,
  Imagem,
}: Props) => {
  const visibleTags = tags.slice(0, 3);
  const { setDetailsVisible, setSelectedItem } = useContext(MenuContext);

  const showDetailsHandler = () => {
    setDetailsVisible(true);
    setSelectedItem({
      id,
      name,
      desc,
      tags,
      link,
      git,
      linkback,
      gitback,
      Imagem: Imagem,
    });
  };

  return (
    <>
      <CardContainer onClick={showDetailsHandler}>
        {Imagem && <img src={Imagem} alt="Imagem de site" />}
        <div className="infos">
          <h4>{name}</h4>
          <p className="description">{desc}</p>
          <div className="tags">
            <div className="tags__list">
              {visibleTags.map((tag) => (
                <Tag name={tag} key={tag} />
              ))}
            </div>
            <div className="more">
              <span>+</span>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  );
};

export default Card;
