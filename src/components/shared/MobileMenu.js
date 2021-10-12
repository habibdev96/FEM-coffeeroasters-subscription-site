import styled from 'styled-components';
import { flexCenter } from '../../abstracts/Mixins';
import StyledLink from '../styledElements/Link.styled';
import { useGlobalContext } from '../../context';

const StyledMobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  background: linear-gradient(#f3fcf7, #f3fcf7, transparent 90%),
    linear-gradient(0deg, transparent, #f3fcf7);

  @media (min-width: 768px) {
    display: none;
  }

  .menu-content {
    ${flexCenter};
    align-items: flex-start;
    flex-direction: column;
    min-height: 60vh;
    padding: 2rem;
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    text-align: center;
  }
`;

const MobileMenu = () => {
  const { isSidebarOpen, setIsSidebarOpen, links, scrollToTop } =
    useGlobalContext();

  const handleClick = () => {
    scrollToTop();
    setIsSidebarOpen(false);
  };

  if (isSidebarOpen) {
    return (
      <StyledMobileMenu>
        <div className='menu-content'>
          <ul className='menu-links'>
            {links.map((link) => (
              <li key={link.id}>
                <StyledLink to={link.path} onClick={handleClick} mobile={+true}>
                  {link.text}
                </StyledLink>
              </li>
            ))}
          </ul>
        </div>
      </StyledMobileMenu>
    );
  } else {
    return null;
  }
};

export default MobileMenu;
