import SectionHero from '../components/shared/SectionHero';
import { useGlobalContext } from '../context';

const About = () => {
  const { sectionHeros } = useGlobalContext();

  return (
    <>
      <SectionHero
        bg={sectionHeros[0].bg}
        title={sectionHeros[0].title}
        description={sectionHeros[0].description}
      />
    </>
  );
};

export default About;
