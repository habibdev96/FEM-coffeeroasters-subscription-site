import styled from 'styled-components';
import { CardHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';

const StyledArticle = styled.article`
  .icon {
    width: 10rem;
  }
`;

const Headquarter = ({ icon, headquarter, address, city, province, phone }) => {
  return (
    <StyledArticle>
      <img src={icon} alt={headquarter} className='icon' />
      <CardHeading dark>{headquarter}</CardHeading>
      <Paragraph nopadding>{address}</Paragraph>
      <Paragraph nopadding>{city}</Paragraph>
      <Paragraph nopadding>{province}</Paragraph>
      <Paragraph nopadding>{phone}</Paragraph>
    </StyledArticle>
  );
};

export default Headquarter;
