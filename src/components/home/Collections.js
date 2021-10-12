import styled from 'styled-components';
import { sectionSpacingMd, maxWidthLg } from '../../abstracts/Mixins';
import { GradientHeading } from '../styledElements/Headings.styled';
import Collection from './Collection';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  text-align: center;

  .collections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    gap: var(--gap);
    transform: translateY(-15%);

    ${Responsive.lg`
      transform: translateY(0);   
    `}
  }
`;

const Collections = () => {
  const { collections } = useGlobalContext();

  return (
    <section>
      <Container data-aos='fade-in' data-aos-delay='200'>
        <GradientHeading>our collection</GradientHeading>
        <div className='collections'>
          {collections.map((collection) => (
            <Collection key={collection.id} {...collection} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Collections;
