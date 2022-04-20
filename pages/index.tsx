import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/sections/Navbar';
import MainBanner from '../components/sections/MainBanner';
import TransactionSteps from '../components/sections/TransactionSteps';
import FeaturedGame from '../components/sections/FeaturedGame';
import WebsiteFacts from '../components/sections/WebsiteFacts';
import ReadStory from '../components/sections/ReadStory';
import Footer from '../components/sections/Footer';

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionSteps />
      <FeaturedGame />
      <WebsiteFacts />
      <ReadStory />
      <Footer />
    </>
  );
}

export default Home;
