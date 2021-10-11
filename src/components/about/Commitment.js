import styled from 'styled-components';
import showcase from '../../assets/about/desktop/image-commitment.jpg';
import { SectionHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  gap: var(--gap);

  .showcase {
    border-radius: var(--mainRadius);
  }
`;

const Commitment = () => {
  return (
    <section>
      <Container>
        <img src={showcase} alt='' className='showcase' data-aos='fade-in' />
        <div data-aos='fade-in' data-aos-delay='200'>
          <SectionHeading dark>Our commitment</SectionHeading>
          <Paragraph>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default Commitment;
