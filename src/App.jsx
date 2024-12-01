import Header from './components/Header/Header.jsx'
import SidebarWithBanner from './components/SidebarWithBanner/SidebarWithBanner.jsx'
import ProductBlock from './components/ProductBlock/ProductBlock.jsx'
import GameZone from './components/GameZone/GameZone.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <div>
			<Header />
			<SidebarWithBanner />
			<ProductBlock />
			<GameZone />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}
