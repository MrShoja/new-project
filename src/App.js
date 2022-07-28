import './App.css';
import Car from './Car';

function App() {
  return (
    <div className="App">
      <h1> My Cars : </h1>
      <Car moudel="BMW" color="RED" />
      <Car moudel="BOGATI" color="ORANGE" />
      <Car moudel="MAZARATI" color="BLUE" />
    </div>
  );
}

export default App;
