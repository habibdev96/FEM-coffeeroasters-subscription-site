import styled from 'styled-components';
import { SubHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';

const StyledArticle = styled.article`
  .image {
    width: 20rem;
  }
`;

const Collection = ({ image, title, description }) => {
  return (
    <StyledArticle>
      <img src={image} alt={title} className='image' />
      <SubHeading dark>{title}</SubHeading>
      <Paragraph>{description}</Paragraph>
    </StyledArticle>
  );
};

export default Collection;
