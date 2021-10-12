import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-size: 7.2rem;
  color: var(--lightCream);

  ${Responsive.md`
    font-size: 4rem;
  `}
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4rem;
  color: ${({ dark }) => dark && 'var(--darkGrayBlue)'};
  color: ${({ gray }) => gray && 'var(--gray)'};
  color: ${({ light }) => light && 'var(--lightCream)'};

  ${Responsive.sm`
    font-size: 2.4rem;
  `}
`;

export const GradientHeading = styled.h2`
  ${headingStyles}
  font-size: 15rem;
  background: -webkit-linear-gradient(var(--gray), var(--white));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${Responsive.lg`
    font-size: 8rem;
  `}

  ${Responsive.sm`
    font-size: 5rem;
  `}
`;

export const SubHeading = styled.h3`
  ${headingStyles}
  font-size: 2.4rem;
  color: ${({ dark }) => dark && 'var(--darkGrayBlue)'};
  color: ${({ gray }) => gray && 'var(--gray)'};
  color: ${({ light }) => light && 'var(--lightCream)'};
`;

export const CardHeading = styled.h4`
  ${headingStyles}
  font-size: 3.2rem;
  color: ${({ light }) => light && 'var(--lightCream)'};
  color: ${({ dark }) => dark && 'var(--darkGrayBlue)'};
`;
