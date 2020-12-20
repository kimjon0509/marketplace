import './App.scss';
import NavBar from './navbar/navbar';
import ImageSlider from './image-slider/imageSlider';
import TodaysDeal from './todays-deal/todaysDeal';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ImageSlider></ImageSlider> 
      <TodaysDeal></TodaysDeal>
    </>
  );
}

export default App;
