import Hearth from "../../assets/Hearth.svg";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <span>Feito com </span> <img src={Hearth} alt="amor" />
      <span> por... mim!</span>
    </FooterContainer>
  );
};

export default Footer;
