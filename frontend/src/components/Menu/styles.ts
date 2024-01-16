import styled from "styled-components";
import { colors } from "../../styles";

export const MenuContainer = styled.div`
  margin-top: 27vh;
  background-color: ${colors.darkblue};

  .menuheader {
    text-align: center;
    position: relative;
    padding-bottom: 48px;

    h1 {
      font-size: 40px;
      font-weight: 500;
      position: absolute;
      top: -8%; /* Ajuste o valor conforme necessário para mover o texto para fora da div */
      left: 50%; /* Posiciona o texto no centro horizontalmente */
      transform: translate(-50%, -50%); /* Centraliza o texto verticalmente */
    }
  }

  .menuitems {
    padding-bottom: 48px;
    overflow-x: hidden;

    display: inline-block;
    gap: 48px;
    position: relative;
    transition: all ease 0.5s;
  }

  .menuitem {
    width: 256px;
    display: inline-block;
    transform: scale(0.9);
  }

  .row {
    width: 40px;
    height: 408px;
    position: absolute;
    background-color: rgba(31, 43, 50, 0.5);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
  }

  .row--left {
    left: 0;
  }

  .row--right {
    right: 0;
  }

  &:hover .row--left,
  &:hover .row--right {
    opacity: 1;
  }
`;
