import styled from 'styled-components';
import { headingStyles, textStyles } from '../../abstracts/Mixins';

const StyledArticle = styled.article`
  cursor: pointer;
  padding: 5rem 3rem;
  background-color: var(--tan);
  border-radius: var(--mainRadius);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    background-color: var(--paleOrange);
  }

  .title {
    ${headingStyles}
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  .description {
    ${textStyles}
    font-size: 1.6rem;
  }
`;

const SubscriptionCard = ({ optionTitle, optionDescription }) => {
  return (
    <StyledArticle>
      <h4 className='title'>{optionTitle}</h4>
      <p className='description'>{optionDescription}</p>
    </StyledArticle>
  );
};

export default SubscriptionCard;
