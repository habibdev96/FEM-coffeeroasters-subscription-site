import styled from 'styled-components';
import Feature from './Feature';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import { SectionHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { useGlobalContext } from '../../context';

const StyledSection = styled.section`
  margin: 0 2rem;
  ${maxWidthLg}
  ${sectionSpacingMd}
`;

const Container = styled.div`
  padding: 10rem 2rem 0 2rem;
  text-align: center;
  border-radius: var(--mainRadius);
  background-color: var(--darkGrayBlue);

  .paragraph {
    width: 50%;
    margin: 0 auto;
  }

  .features {
    transform: translateY(10rem);
    margin: 0 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    gap: var(--gap);
  }
`;

const Features = () => {
  const { features } = useGlobalContext();

  return (
    <StyledSection>
      <Container data-aos='fade-in'>
        <SectionHeading light>Why choose us?</SectionHeading>
        <Paragraph light className='paragraph'>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </Paragraph>
        <div className='features'>
          {features.map((feature) => (
            <Feature key={feature.id} {...feature} />
          ))}
        </div>
      </Container>
    </StyledSection>
  );
};

export default Features;
