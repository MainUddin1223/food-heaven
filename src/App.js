import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MealContainer from './components/MealContainer/MealContainer';

function App() {
  return (
    <div className="">
      <Header></Header>
      <MealContainer></MealContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
