import styled from 'styled-components';
import StepDark from './StepDark';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const StyledSection = styled.section`
  ${sectionSpacingMd}
`;

const Container = styled.div`
  ${maxWidthLg}
  overflow: hidden;
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  gap: var(--gap);
  background-color: var(--darkGrayBlue);
  border-radius: var(--mainRadius);

  ${Responsive.md`
    text-align: center;
  `}

  ${Responsive.sm`
    padding: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  `}
`;

const StepsDark = () => {
  const { steps } = useGlobalContext();

  return (
    <StyledSection>
      <Container data-aos='fade-in'>
        {steps.map((step) => (
          <StepDark key={step.id} {...step} />
        ))}
      </Container>
    </StyledSection>
  );
};

export default StepsDark;
