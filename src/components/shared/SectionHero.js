import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { maxWidthLg } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

const StyledHeader = styled.header`
  margin: 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}
  padding: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10rem;
  margin-top: 10rem;
  border-radius: var(--mainRadius);

  ${Responsive.xl`
    padding: 10rem 5rem;
    grid-template-columns: 2fr 1fr; 
  `}

  ${Responsive.md`
    grid-template-columns: 1fr;
    text-align: center;
  `}
`;

const SectionHero = ({ title, description, bg }) => {
  return (
    <StyledHeader>
      <Container
        style={{
          background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5)), url(${bg}) center center/cover no-repeat`,
        }}
      >
        <div data-aos='fade-in'>
          <SectionHeading light>{title}</SectionHeading>
          <Paragraph light>{description}</Paragraph>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default SectionHero;
