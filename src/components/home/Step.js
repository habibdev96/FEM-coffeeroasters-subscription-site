import styled from 'styled-components';
import { CardHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { headingStyles } from '../../abstracts/Mixins';

const StyledArticle = styled.article`
  position: relative;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 3%;
    left: -100%;
    z-index: 1;
    height: 0.2rem;
    width: 130%;
    background-color: var(--paleOrange);
  }

  &:nth-child(3) {
    &::before {
      width: 100%;
    }
  }

  .circle {
    position: relative;
    z-index: 10;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    margin-bottom: 5rem;
    position: relative;
    border: 0.2rem solid var(--darkCyan);
    background-color: var(--lightCream);
  }

  .number {
    ${headingStyles}
    font-size: 7.2rem;
    margin-bottom: 2rem;
    color: var(--paleOrange);
  }
`;

const Step = ({ number, title, description }) => {
  return (
    <StyledArticle>
      <div className='circle'></div>
      <h3 className='number'>{number}</h3>
      <CardHeading>{title}</CardHeading>
      <Paragraph dark>{description}</Paragraph>
    </StyledArticle>
  );
};

export default Step;
