import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { maxWidthLg } from '../../abstracts/Mixins';

const StyledHeader = styled.header`
  margin: 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}
  padding: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10rem;
  border-radius: var(--mainRadius);
`;

const SectionHero = ({ title, description, bg }) => {
  return (
    <StyledHeader>
      <Container
        style={{ background: `url(${bg}) center center/cover no-repeat` }}
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
