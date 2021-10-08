import styled from 'styled-components';
import logo from '../../assets/shared/desktop/logolight.svg';
import { maxWidthLg, flexBetween, flexAlign } from '../../abstracts/Mixins';
import StyledLink from '../styledElements/Link.styled';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${flexBetween}
  padding: 5rem;
  background-color: var(--darkGrayBlue);

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
    <footer>
      <Container>
        <div>
          <img src={logo} alt='' className='logo' />
          <ul className='links'>
            {links.map((link) => (
              <li key={link.id}>
                <StyledLink path={link.path} footer>
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
    </footer>
  );
};

export default Footer;
