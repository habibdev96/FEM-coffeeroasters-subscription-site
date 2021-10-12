import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context';

const Toggler = styled.button`
  display: none;
  background: transparent;
  outline: 0;
  border: 0;
  z-index: 2000;

  ${Responsive.md`
    display: block;
  `}

  .icon {
    color: var(--darkGrayBlue);
    font-size: var(--lg);
  }
`;

const MobileMenuToggler = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <Toggler onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
      {!isSidebarOpen ? (
        <FaBars className='icon' />
      ) : (
        <FaTimes className='icon' />
      )}
    </Toggler>
  );
};

export default MobileMenuToggler;
