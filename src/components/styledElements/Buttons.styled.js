import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';

const Button = styled(Link)`
  ${headingStyles}
  font-size: 1.8rem;
  padding: 1.5rem 2rem;
  display: inline-block;
  border-radius: var(--mainRadius);
  transition: var(--mainTransition);

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--darkCyan);
      color: var(--white);

      &:hover,
      &:focus {
        background-color: var(--lightCyan);
      }
    `}
`;

export default Button;
