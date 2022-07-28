import './App.css';
import Car from './Car';

function App() {
  return (
    <div className="App">
      <h1> My Cars : </h1>
      <Car moudel="BMW" color="RED" />
      <Car moudel="BENZ" color="ORANGE" />
      <Car moudel="MAZARATI" color="BLUE" />
      <Car moudel="BUGATI" color="BLUE"> i am supper car </Car>  
    </div> 
  );
} 

export default App;
