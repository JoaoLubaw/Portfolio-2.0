import { TagContainer } from "./styles";

interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  return (
    <TagContainer>
      <>
        <span>{name}</span>
      </>
    </TagContainer>
  );
};

export default Tag;
