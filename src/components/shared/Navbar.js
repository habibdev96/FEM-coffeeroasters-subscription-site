import styled from 'styled-components';
import logo from '../../assets/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';
import StyledLink from '../styledElements/Link.styled';
import {
  maxWidthLg,
  sectionSpacingSm,
  flexBetween,
  flexAlign,
} from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  ${flexBetween}

  .logo {
    width: 30rem;
  }

  .links {
    ${flexAlign}
  }
`;

const Navbar = () => {
  const { links } = useGlobalContext();

  return (
    <nav>
      <Container>
        <Link to='/'>
          <img src={logo} alt='' className='logo' />
        </Link>
        <ul className='links'>
          {links.map((link) => (
            <li key={link.id}>
              <StyledLink to={link.path}>{link.text}</StyledLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;