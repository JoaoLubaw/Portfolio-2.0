import { createContext, useEffect, useRef, useState } from "react";
import { useGetProjectsQuery } from "../../services/api";
import { useSwipeable } from "react-swipeable";

import NavigateBeforeIcon from "../../assets/navigate-before.svg";
import NavigateNextIcon from "../../assets/navigate-next.svg";

import Details from "../Details";
import Card from "../Card";
import { MenuContainer, MenuHeader } from "./styles";
import Loader from "../Loader";

interface Props {
  id: number;
  name: string;
  desc: string;
  tags: string[];
  link: string;
  git: string;
  linkback: string | undefined;
  gitback: string | undefined;
  Imagem: string;
}

export const MenuContext = createContext<{
  selectedItem: Props | null;
  setDetailsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<Props | null>>;
}>({
  selectedItem: null,
  setDetailsVisible: () => {},
  setSelectedItem: () => {},
});

const Menu = () => {
  const { data, error, isLoading } = useGetProjectsQuery();
  const [Projects, setProjects] = useState<Projects>([]);
  const [selectedItem, setSelectedItem] = useState<Props | null>(null);
  const [isDetailsVisible, setDetailsVisible] = useState(false);

  const showDetails = () => {
    setDetailsVisible(true);
  };

  useEffect(() => {
    if (data) {
      const reversedProjects = [...data].reverse();
      setProjects(reversedProjects);
    }
  }, [data]);

  const [scrollX, setScrollX] = useState(0);
  const ulRef = useRef<HTMLUListElement>(null);
  const ListWidth = Projects.length * 256 + 16;

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = ulRef.current ? ulRef.current.scrollWidth : 0;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW;
    }
    setScrollX(x);
  };

  const menuContextValue = {
    selectedItem,
    setDetailsVisible,
    setSelectedItem,
    isDetailsVisible,
  };

  const sensitivityFactor = 0.3;

  const swipeConfig = {
    onSwiping: (event: { deltaX: number }) => {
      const x = event.deltaX * sensitivityFactor;
      setScrollX((prev) => {
        const next = prev + x;
        return Math.min(0, Math.max(window.innerWidth - ListWidth, next));
      });
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  };

  const handlers = useSwipeable(swipeConfig);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MenuContext.Provider value={menuContextValue}>
      <MenuHeader>
        <h1>Portfólio</h1>
      </MenuHeader>

      <MenuContainer className="MenuContainer" {...handlers}>
        <div className="row row--left" onClick={handleLeftArrow}>
          <img src={NavigateBeforeIcon} alt="Before" />
        </div>
        <div className="row row--right" onClick={handleRightArrow}>
          <img src={NavigateNextIcon} alt="Next" />
        </div>
        <ul
          ref={ulRef}
          className="menuitems"
          style={{ marginLeft: `${scrollX}px`, width: `${ListWidth}px` }}
        >
          {Projects.map((project) => (
            <li key={project.ID} className="menuitem">
              <Card
                key={project.ID}
                id={project.ID}
                name={project.Name}
                desc={project.Description}
                link={project.Link}
                git={project.LinkGit}
                linkback={project.LinkBack}
                gitback={project.GitBack}
                tags={project.Tags}
                showDetails={showDetails}
                Imagem={project.Imagem}
              />
            </li>
          ))}
        </ul>
      </MenuContainer>

      {isDetailsVisible && selectedItem && (
        <Details
          id={selectedItem.id}
          Imagem={selectedItem.Imagem}
          name={selectedItem.name}
          desc={selectedItem.desc}
          git={selectedItem.git}
          gitback={selectedItem.gitback}
          link={selectedItem.link}
          linkback={selectedItem.linkback}
          tags={selectedItem.tags}
        />
      )}
    </MenuContext.Provider>
  );
};

export default Menu;
