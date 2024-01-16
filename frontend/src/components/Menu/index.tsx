import Card from "../Card";
import { MenuContainer } from "./styles";
import NavigateBeforeIcon from "../../assets/navigate-before.svg";
import NavigateNextIcon from "../../assets/navigate-next.svg";
import { useRef, useState } from "react";

const Menu = () => {
  const [scrollX, setScrollX] = useState(0);
  const ulRef = useRef<HTMLUListElement>(null);

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

  return (
    <MenuContainer className="MenuContainer">
      <div className="menuheader">
        <h1>Portfólio</h1>
      </div>
      <div className="row row--left" onClick={handleLeftArrow}>
        <img src={NavigateBeforeIcon} alt="Before" />
      </div>
      <div className="row row--right" onClick={handleRightArrow}>
        <img src={NavigateNextIcon} alt="Next" />
      </div>
      <ul
        ref={ulRef}
        className="menuitems"
        style={{ marginLeft: `${scrollX}px`, width: `10000px` }}
      >
        <li className="menuitem">
          <Card />
        </li>
        <li className="menuitem">
          <Card />
        </li>
        <li className="menuitem">
          <Card />
        </li>
        <li className="menuitem">
          <Card />
        </li>
        <li className="menuitem">
          <Card />
        </li>
        <li className="menuitem">
          <Card />
        </li>
        <li className="menuitem">
          <Card />
        </li>
        <li className="menuitem">
          <Card />
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
