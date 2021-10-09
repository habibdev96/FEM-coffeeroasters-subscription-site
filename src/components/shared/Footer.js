import styled from 'styled-components';
import logo from '../../assets/shared/desktop/logolight.svg';
import { maxWidthLg, flexBetween, flexAlign } from '../../abstracts/Mixins';
import StyledLink from '../styledElements/Link.styled';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const StyledFooter = styled.footer`
  margin: 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${flexBetween}
  padding: 5rem;
  background-color: var(--darkGrayBlue);
  border-radius: var(--mainRadius);

  .logo {
    width: 30rem;
  }

  & > div {
    ${flexAlign}
  }

  .links {
    ${flexAlign}
  }

  .socials {
    ${flexAlign}
    gap: 3rem;
  }

  .social {
    font-size: var(--md);
    color: var(--lightCream);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--paleOrange);
    }
  }
`;

const Footer = () => {
  const { links, socials } = useGlobalContext();

  return (
    <StyledFooter>
      <Container>
        <div>
          <Link to='/'>
            <img src={logo} alt='' className='logo' />
          </Link>
          <ul className='links'>
            {links.map((link) => (
              <li key={link.id}>
                <StyledLink to={link.path} footer={+true}>
                  {link.text}
                </StyledLink>
              </li>
            ))}
          </ul>
        </div>
        <ul className='socials'>
          {socials.map((social) => (
            <li key={social.id}>
              <a href={social.path} className='social'>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
