import styled from 'styled-components';
import Subscription from './Subscription';
import {
  maxWidthLg,
  sectionSpacingMd,
  headingStyles,
  textStyles,
} from '../../abstracts/Mixins';
import { SubmitButton } from '../styledElements/Buttons.styled';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: var(--gap);

  // for position sticky
  & > div {
    height: auto;
  }

  .steps {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .step {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1rem 0;
    background: transparent;
    outline: 0;
    border: 0;
  }

  .number {
    ${headingStyles}
    font-size: 2.4rem;
    color: var(--darkCyan);
  }

  .step {
    ${headingStyles}
    font-size: 2.4rem;
    color: var(--gray);
    opacity: 0.8;
  }

  .summary {
    margin-bottom: 2rem;
    padding: 2rem 5rem;
    background-color: var(--darkGrayBlue);
    border-radius: var(--mainRadius);

    &-title {
      ${textStyles}
      text-transform: uppercase;
      font-size: 1.6rem;
      color: var(--gray);
    }

    &-text {
      ${headingStyles}
      font-size: 2.4rem;
      line-height: 1.6;
      color: var(--lightCream);

      span {
        color: var(--darkCyan);
      }
    }
  }
`;

const Subscriptions = () => {
  const { subscriptions } = useGlobalContext();

  return (
    <section>
      <Container>
        <div>
          <div className='steps'>
            {subscriptions.map((sub) => (
              <button key={sub.id} className='step'>
                <span className='number'>{sub.number}</span>
                <span className='step'>{sub.step}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          {subscriptions.map((sub) => (
            <Subscription key={sub.id} {...sub} />
          ))}
          <div className='summary'>
            <p className='summary-title'>Order Summary</p>
            <h4 className='summary-text'>
              "I drink my coffee as <span>Filter</span> with a{' '}
              <span>Decaf</span> type of bean. <span>250g</span> ground ala{' '}
              <span>Cafetiére</span>, sent to me <span>Every Week</span>"
            </h4>
          </div>
          <SubmitButton primary={+true} type='submit'>
            Create my plan!
          </SubmitButton>
        </div>
      </Container>
    </section>
  );
};

export default Subscriptions;
