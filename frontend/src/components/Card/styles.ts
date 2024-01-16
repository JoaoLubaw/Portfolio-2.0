import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.div`
  width: 256px;
  width: 100%;
  transition: transform 0.3s ease-in-out; /* Adiciona uma transição suave ao efeito de transformação */
  height: 408px;
  cursor: pointer;

  img {
    width: 100%;
    height: 256px;
    border-radius: 5px;
  }

  h4 {
    margin-top: 4px;
    font-size: 20px;
    font-weight: bold;
  }
  p {
    margin: 8px 0;
    font-size: 16px;
  }

  .tags {
    display: flex;
    justify-content: space-between;

    &__list {
      display: flex;
    }

    .more {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: ${colors.darkerorange};
      font-weight: bold;
      text-align: center;
      line-height: 18px;
      align-items: center;
    }
  }

  &:hover {
    transform: scale(1.1); /* Expande a div ao passar o mouse sobre ela */
  }
`;
