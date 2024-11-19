// app/page.js
import Header from '../components/Header';
import HomeScreen from '../components/HomeScreen';
import GraphicDesignPortfolio from '../components/GraphicDesignPortfolio';
import ArtPortfolio from '../components/ArtPortfolio';
import NMC from '../components/NMC';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeScreen/>
      <GraphicDesignPortfolio/>
      <ArtPortfolio/>
      <NMC/>
      <Footer />
    </div>
  );
};

export default HomePage;
