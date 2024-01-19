import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

import Background from "../../assets/Background.png";
import BackgroundMobile from "../../assets/background-mobile.png";

interface Props {
  isMobile: boolean;
}

export const Header = styled.div`
  .introduction {
    padding-top: 88px;

    h1 {
      font-size: 64px;
      font-weight: bold;
    }

    h2 {
      font-size: 32px;
      font-weight: 500;
    }

    h3 {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .links {
    margin-top: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .introduction {
      padding-top: 20px;

      h1 {
        font-size: 36px;
        font-weight: bold;
      }

      h2 {
        font-size: 24px;
        font-weight: 500;
      }

      h3 {
        font-size: 16px;
        font-weight: 500;
      }
    }

    .links {
      margin-top: 8px;
    }
  }
`;
export const BackgroundImage = styled.div<Props>`
  background-image: url(${(Props) =>
    Props.isMobile ? BackgroundMobile : Background});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 56vh;
  padding-top: 0;

  @media (max-width: ${breakpoints.tablet}) {
    height: 24vh;
  }
`;

export const Link = styled.a`
  margin-right: 6px;

  .svg {
    height: 24px;
  }
`;
