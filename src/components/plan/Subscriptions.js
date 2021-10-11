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

  .step-btn {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
    background: transparent;
    outline: 0;
    border: 0;
    opacity: 0.8;
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
  }

  .summary {
    margin-bottom: 3rem;
    padding: 3rem 5rem;
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
        <div data-aos='fade-in'>
          <div className='steps'>
            {subscriptions.map((sub) => (
              <button key={sub.id} className='step-btn'>
                <span className='number'>{sub.number}</span>
                <span className='step'>{sub.step}</span>
              </button>
            ))}
          </div>
        </div>
        <div data-aos='fade-in' data-aos-delay='200'>
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
