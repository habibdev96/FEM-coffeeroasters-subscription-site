import styled from 'styled-components';
import { flexCenter, textStyles, headingStyles } from '../../abstracts/Mixins';
import logo from '../../assets/tag/habibdevgif.gif';

const StyledTag = styled.div`
  ${flexCenter};
  gap: 1rem;
  flex-wrap: wrap;
  padding: 3rem;

  .heading {
    ${textStyles};
    color: var(--darkGrayBlue);
    text-align: center;
    font-size: var(--xxs);
  }

  .link {
    ${headingStyles};
    color: var(--darkCyan);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .tag-logo {
    width: 5rem;
  }
`;

const Tag = () => {
  return (
    <StyledTag>
      <h3 className='heading'>
        project for{' '}
        <a
          href='https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          frontend mentor
        </a>{' '}
        coded by{' '}
        <a
          href='https://github.com/habibdev96'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          habibdev{' '}
        </a>
      </h3>
      <img src={logo} alt='logo' className='tag-logo' />
    </StyledTag>
  );
};

export default Tag;
