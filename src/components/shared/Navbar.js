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
import MobileMenuToggler from './MobileMenuToggler';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  ${flexBetween}

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
        <MobileMenuToggler />
      </Container>
    </nav>
  );
};

export default Navbar;
