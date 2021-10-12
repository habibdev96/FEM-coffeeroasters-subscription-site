import styled from 'styled-components';
import { HeroHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { Button } from '../styledElements/Buttons.styled';
import { maxWidthLg } from '../../abstracts/Mixins';
import bg from '../../assets/home/desktop/image-hero-coffeepress.jpg';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const StyledHeader = styled.header`
  margin: 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10rem;
  margin-top: 10rem;
  background: url(${bg}) center center/cover no-repeat;
  border-radius: var(--mainRadius);

  ${Responsive.xl`
    padding: 10rem 5rem;
    grid-template-columns: 2fr 1fr; 
  `}

  ${Responsive.md`
    grid-template-columns: 1fr;
    text-align: center;
    padding: 10rem 2rem;
  `}
`;

const HomeHero = () => {
  const { scrollToTop } = useGlobalContext();

  return (
    <StyledHeader>
      <Container>
        <div data-aos='fade-in'>
          <HeroHeading>Great coffee made simple.</HeroHeading>
          <Paragraph light>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </Paragraph>
          <Button to='/Plan' primary={+true} onClick={scrollToTop}>
            Create your plan
          </Button>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default HomeHero;
