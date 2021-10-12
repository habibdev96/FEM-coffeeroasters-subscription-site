import styled from 'styled-components';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import { SubHeading } from '../styledElements/Headings.styled';
import Step from './Step';
import { Button } from '../styledElements/Buttons.styled';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}

  ${Responsive.md`
    text-align: center;
  `}

  .steps {
    margin: 10rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: flex-start;
    gap: var(--gap);
  }
`;

const Steps = () => {
  const { steps, scrollToTop } = useGlobalContext();

  return (
    <section>
      <Container data-aos='fade-in'>
        <SubHeading gray>How it works</SubHeading>
        <div className='steps'>
          {steps.map((step) => (
            <Step key={step.id} {...step} />
          ))}
        </div>
        <Button to='/Plan' primary={+true} onClick={scrollToTop}>
          Create your plan
        </Button>
      </Container>
    </section>
  );
};

export default Steps;
