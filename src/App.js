import Navbar from './components/navbar/index';
import Carousel from './components/carousel/index';
import { carouselData } from './components/carousel/carouselData';
import './App.css';

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Carousel slides={carouselData}/>
      </div>
    </>
  );
}

export default App;
