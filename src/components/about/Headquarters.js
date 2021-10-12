import styled from 'styled-components';
import { SubHeading } from '../styledElements/Headings.styled';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import Headquarter from './Headquarter';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}

  ${Responsive.md`
    text-align: center;
  `}

  .headquarters {
    margin-top: 10rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    gap: var(--gap);
  }
`;

const Headquarters = () => {
  const { headquarters } = useGlobalContext();

  return (
    <section>
      <Container data-aos='fade-in'>
        <SubHeading gray>Our headquarters</SubHeading>
        <div className='headquarters'>
          {headquarters.map((hq) => (
            <Headquarter key={hq.id} {...hq} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Headquarters;
