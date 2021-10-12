import styled from 'styled-components';
import { CardHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { headingStyles } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

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

    ${Responsive.lg`
      display: none;
    `}
  }

  &:nth-child(3) {
    &::before {
      width: 100%;

      ${Responsive.lg`
        display: none;
      `}
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
    background-color: var(--darkGrayBlue);

    ${Responsive.md`
       margin: 0 auto 5rem auto;
    `}
  }

  .number {
    ${headingStyles}
    font-size: 7.2rem;
    margin-bottom: 2rem;
    color: var(--paleOrange);

    ${Responsive.sm`
      font-size: 5rem; 
    `}
  }
`;

const StepDark = ({ number, title, description }) => {
  return (
    <StyledArticle>
      <div className='circle'></div>
      <h3 className='number'>{number}</h3>
      <CardHeading light>{title}</CardHeading>
      <Paragraph light>{description}</Paragraph>
    </StyledArticle>
  );
};

export default StepDark;
