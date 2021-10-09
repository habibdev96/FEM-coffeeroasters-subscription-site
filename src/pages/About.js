import SectionHero from '../components/shared/SectionHero';
import Commitment from '../components/about/Commitment';
import Quality from '../components/about/Quality';
import Headquarters from '../components/about/Headquarters';
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
      <main>
        <Commitment />
        <Quality />
        <Headquarters />
      </main>
    </>
  );
};

export default About;
