import styled from 'styled-components';
import { SubHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';

const StyledArticle = styled.article`
  background-color: var(--darkCyan);
  padding: 5rem 2rem;
  height: 100%;
  border-radius: var(--mainRadius);

  &:nth-child(3) {
    .icon {
      width: 14rem;
    }
  }

  .icon {
    width: 10rem;
    margin-bottom: 2rem;
  }
`;

const Feature = ({ icon, title, description }) => {
  return (
    <StyledArticle>
      <img src={icon} alt={title} className='icon' />
      <SubHeading light>{title}</SubHeading>
      <Paragraph light>{description}</Paragraph>
    </StyledArticle>
  );
};

export default Feature;
