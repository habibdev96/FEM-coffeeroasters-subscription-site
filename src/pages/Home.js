import HomeHero from '../components/home/HomeHero';
import Collections from '../components/home/Collections';
import Features from '../components/home/Features';
import Steps from '../components/home/Steps';

const Home = () => {
  return (
    <>
      <HomeHero />
      <main>
        <Collections />
        <Features />
        <Steps />
      </main>
    </>
  );
};

export default Home;
