import styled from 'styled-components';
import logo from '../../assets/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';
import StyledLink from '../styledElements/Link.styled';
import { maxWidthLg, flexBetween, flexAlign } from '../../abstracts/Mixins';
import MobileMenuToggler from './MobileMenuToggler';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3000;
  background-color: hsla(147, 60%, 97%, 0.9);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${flexBetween}
  padding: 2rem;

  .logo {
    width: 30rem;

    ${Responsive.sm`
      width: 20rem;
    `}

    ${Responsive.xs`
      width: 15rem;
    `}
  }

  .links {
    ${flexAlign}

    ${Responsive.md`
      display: none;
    `}
  }
`;

const Navbar = () => {
  const { links } = useGlobalContext();

  return (
    <StyledNav>
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
        <MobileMenuToggler />
      </Container>
    </StyledNav>
  );
};

export default Navbar;
