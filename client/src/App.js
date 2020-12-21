import './App.scss';
import NavBar from './navbar/navbar';
import ImageSlider from './image-slider/imageSlider';
import TodaysDeal from './todays-deal/todaysDeal';
import Authentication from './authentication/authentication';

function App() {
  return (
    <>
      <Authentication></Authentication>
      <div>
        <img src="logo" alt="logo" name="logo"></img>
      </div>
      <NavBar></NavBar>
      <ImageSlider></ImageSlider> 
      <TodaysDeal></TodaysDeal>
    </>
  );
}

export default App;
