import styled from 'styled-components';
import logo from '../../assets/shared/desktop/logolight.svg';
import {
  maxWidthLg,
  flexBetween,
  flexAlign,
  flexCenter,
} from '../../abstracts/Mixins';
import StyledLink from '../styledElements/Link.styled';
import { Link } from 'react-router-dom';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const StyledFooter = styled.footer`
  margin: 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${flexBetween}
  flex-wrap: wrap;
  padding: 5rem;
  background-color: var(--darkGrayBlue);
  border-radius: var(--mainRadius);

  ${Responsive.sm`
    ${flexCenter}
  `}

  .logo-container {
    ${Responsive.sm`
      margin: 0 auto;
    `}
  }

  .logo {
    width: 30rem;

    ${Responsive.sm`
      width: 20rem;
    `}

    ${Responsive.xs`
      width: 15rem;
    `}
  }

  & > div {
    ${flexAlign}
    flex-wrap: wrap;
  }

  .links {
    ${flexAlign}

    ${Responsive.sm`
      flex-direction: column;
      gap: 2rem;
      margin: 0 auto;
    `}
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
  const { links, socials, scrollToTop } = useGlobalContext();

  return (
    <StyledFooter>
      <Container>
        <div>
          <Link to='/' className='logo-container'>
            <img src={logo} alt='' className='logo' />
          </Link>
          <ul className='links'>
            {links.map((link) => (
              <li key={link.id}>
                <StyledLink to={link.path} footer={+true} onClick={scrollToTop}>
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
