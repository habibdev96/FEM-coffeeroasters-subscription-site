import { css } from 'styled-components';

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
`;

const flexAlign = css`
  display: flex;
  align-items: center;
  gap: var(--gap);
`;

const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
`;

const headingStyles = css`
  font-family: 'Fraunces', serif;
  font-weight: 900;
  letter-spacing: 0.1rem;
  line-height: 1.2;
`;

const textStyles = css`
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  letter-spacing: 0.1rem;
  line-height: 2.2;
`;

const sectionSpacingSm = css`
  padding: 5rem 2rem;
`;

const sectionSpacingMd = css`
  padding: 10rem 2rem;
`;

const sectionSpacingLg = css`
  padding: 20rem 2rem;
`;

const maxWidthSm = css`
  max-width: 1000px;
  margin: 0 auto;
`;

const maxWidthMd = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const maxWidthLg = css`
  max-width: 1400px;
  margin: 0 auto;
`;

export {
  flexCenter,
  flexAlign,
  flexBetween,
  headingStyles,
  textStyles,
  sectionSpacingSm,
  sectionSpacingMd,
  sectionSpacingLg,
  maxWidthSm,
  maxWidthMd,
  maxWidthLg,
};
