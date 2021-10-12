import { useState } from 'react';
import styled from 'styled-components';
import SubscriptionCard from './SubscriptionCard';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { SectionHeading } from '../styledElements/Headings.styled';
import { flexBetween } from '../../abstracts/Mixins';

const StyledArticle = styled.article`
  margin: 2rem 0;

  .question {
    ${flexBetween}
    cursor: pointer;
  }

  .icon {
    color: var(--darkCyan);
    font-size: var(--lg);
  }

  .options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--gap);
    margin: 5rem 0;
  }
`;

const Subscription = ({ question, options }) => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <StyledArticle>
      <header className='question' onClick={() => setShowInfo(!showInfo)}>
        <SectionHeading gray>{question}</SectionHeading>
        {!showInfo ? (
          <RiArrowDownSLine className='icon' />
        ) : (
          <RiArrowUpSLine className='icon' />
        )}
      </header>
      {showInfo && (
        <div className='options'>
          {options.map((option) => (
            <SubscriptionCard key={option.id} {...option} />
          ))}
        </div>
      )}
    </StyledArticle>
  );
};

export default Subscription;
