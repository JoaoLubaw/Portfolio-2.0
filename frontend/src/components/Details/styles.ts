import styled from "styled-components";
import { colors } from "../../styles";

export const DetaisContainer = styled.div`
  padding: 48px 220px;
  display: flex;
  gap: 16px;

  img {
    height: 360px;
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    font-size: 32px;
    font-weigth: bold;
    margin-bottom: 16px;
  }

  p {
    width: 500px;
  }

  .tags {
    margin-top: 12px;
    display: flex;
    max-width: 272px;
    flex-wrap: wrap;
    row-gap: 6px;
  }

  .buttons {
    button {
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      color: ${colors.darkerblue};

      background-color: ${colors.lightgrey};
      border-radius: 8px;
      padding: 12px;

      margin-right: 16px;
    }
  }
`;
