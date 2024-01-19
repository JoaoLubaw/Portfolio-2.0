import styled from "styled-components";
import { breakpoints } from "../../styles";

export const AboutContainer = styled.div`
  margin-top: -72px;
  display: flex;
  justify-content: space-between;
  z-index: 0;

  .texts {
    max-width: 664px;
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    margin: 8px 0;
  }

  .part1 {
    margin-top: 8px;
  }

  .division {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;

    .part2 {
      margin-top: 32px;
      max-width: 342px;
    }

    .GitStatus {
      height: 136px;
      margin-bottom: -8px;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .link {
      font-size: 16px;
      display: block;
      text-align: center;
    }
    .svg {
      height: 60px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-top: 0px;

    .links {
      flex-direction: row;
      margin-top: 48px;
    }

    .division {
      display: block;
      text-align: center;

      .part2 {
        max-width: 100%;
        text-align: start;
      }

      .GitStatus {
        justify-content: center;
        margin-top: 16px;
      }
    }
  }
`;
