import styled from 'styled-components';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import { SubHeading } from '../styledElements/Headings.styled';
import Step from './Step';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}

  .steps {
    margin-top: 10rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: flex-start;
    gap: var(--gap);
  }
`;

const Steps = () => {
  const { steps } = useGlobalContext();

  return (
    <section>
      <Container>
        <SubHeading gray>How it works</SubHeading>
        <div className='steps'>
          {steps.map((step) => (
            <Step key={step.id} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Steps;
