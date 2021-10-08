import styled from 'styled-components';
import { HeroHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import Button from '../styledElements/Buttons.styled';
import { maxWidthLg } from '../../abstracts/Mixins';
import bg from '../../assets/home/desktop/image-hero-coffeepress.jpg';

const StyledHeader = styled.header`
  margin: 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10rem;
  background: url(${bg}) center center/cover no-repeat;
  border-radius: var(--mainRadius);
`;

const HomeHero = () => {
  return (
    <StyledHeader>
      <Container>
        <div>
          <HeroHeading>Great coffee made simple.</HeroHeading>
          <Paragraph light>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </Paragraph>
          <Button to='/Plan' primary={+true}>
            Create your plan
          </Button>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default HomeHero;
