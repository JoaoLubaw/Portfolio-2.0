import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const DetailsContainer = styled.div`
  margin-top: 48px;
  padding-bottom: 48px;
  display: flex;
  gap: 16px;

  img {
    width: 40vw;
    object-fit: cover;
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
    width: 32vh;
  }

  .tags {
    margin: 12px 0;
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

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    img {
      width: 100%;
      object-fit: cover;
    }

    h2 {
      margin-top: 8px;
      font-size: 24px;
    }

    p {
      width: 100%;
    }

    .tags {
      max-width: 100%;
    }

    .buttons {
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
    }
  }
`;
