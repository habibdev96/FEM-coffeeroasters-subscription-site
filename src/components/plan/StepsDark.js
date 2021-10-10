import styled from 'styled-components';
import StepDark from './StepDark';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
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
`;

const StepsDark = () => {
  const { steps } = useGlobalContext();

  return (
    <StyledSection>
      <Container>
        {steps.map((step) => (
          <StepDark key={step.id} {...step} />
        ))}
      </Container>
    </StyledSection>
  );
};

export default StepsDark;
