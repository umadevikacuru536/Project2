import logo from './logo.svg';
import './App.css';
import App1 from './c1';
import App2 from './counter';
import Uma from './social';
import Uma1 from './notificaation';
import Uma2 from './box';
import BannerCardItem from './reusable banner';
import ShowRandom from './random';
function App() {
  return (
    <div className="App">
      <h1 className="heading">Super Over League</h1>
      <img src={'https://assets.ccbp.in/frontend/react-js/rcb-img.png'} alt="logo" />
      <img src={'https://assets.ccbp.in/frontend/react-js/csk-img.png'} alt="logo" />


      <App1 />
      <App2 />
      <Uma />
      <Uma1 />
      <Uma2 />
      <BannerCardItem />
      <ShowRandom />
    </div>
  );
}

export default App;
