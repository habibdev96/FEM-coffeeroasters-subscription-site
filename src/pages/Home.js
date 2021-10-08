import HomeHero from '../components/home/HomeHero';
import Collections from '../components/home/Collections';
import Features from '../components/home/Features';

const Home = () => {
  return (
    <>
      <HomeHero />
      <main>
        <Collections />
        <Features />
      </main>
    </>
  );
};

export default Home;
