import SectionHero from '../components/shared/SectionHero';
import { useGlobalContext } from '../context';

const PlanPage = () => {
  const { sectionHeros } = useGlobalContext();

  return (
    <>
      <SectionHero
        bg={sectionHeros[1].bg}
        title={sectionHeros[1].title}
        description={sectionHeros[1].description}
      />
    </>
  );
};

export default PlanPage;
