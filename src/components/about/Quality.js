import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import showcase from '../../assets/about/desktop/image-quality.jpg';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  margin: 0 2rem;
  ${maxWidthLg}
  ${sectionSpacingSm}
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  padding: 2rem 5rem;
  gap: var(--gap);
  border-radius: var(--mainRadius);
  background-color: var(--darkGrayBlue);

  ${Responsive.lg`
    padding: 5rem;
  `}

  ${Responsive.md`
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  `}

  .showcase {
    border-radius: var(--mainRadius);
    transform: translateY(-10rem);

    ${Responsive.lg`
      transform: translateY(0);
    `}

    ${Responsive.md`
      order: -1;
    `}
  }
`;

const Quality = () => {
  return (
    <StyledSection>
      <Container data-aos='fade-in'>
        <div>
          <SectionHeading light>Uncompromising quality</SectionHeading>
          <Paragraph light>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </Paragraph>
        </div>
        <img src={showcase} alt='' className='showcase' />
      </Container>
    </StyledSection>
  );
};

export default Quality;
