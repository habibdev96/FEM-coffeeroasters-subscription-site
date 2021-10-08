import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-size: 7.2rem;
  color: var(--lightCream);
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4rem;
  color: ${({ dark }) => dark && 'var(--darkGrayBlue)'};
  color: ${({ light }) => light && 'var(--lightCream)'};
`;

export const GradientHeading = styled.h2`
  ${headingStyles}
  font-size: 15rem;
  background: -webkit-linear-gradient(var(--gray), var(--white));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubHeading = styled.h3`
  ${headingStyles}
  font-size: 2.4rem;
  color: ${({ dark }) => dark && 'var(--darkGrayBlue)'};
  color: ${({ light }) => light && 'var(--lightCream)'};
`;
