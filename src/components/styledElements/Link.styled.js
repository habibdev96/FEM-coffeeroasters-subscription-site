import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { textStyles } from '../../abstracts/Mixins';

const StyledLink = styled(Link)`
  ${textStyles}
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--gray);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    color: var(--darkGrayBlue);
  }

  ${({ footer }) =>
    footer &&
    css`
      &:hover,
      &:focus {
        color: var(--lightCream);
      }
    `}
`;

export default StyledLink;
