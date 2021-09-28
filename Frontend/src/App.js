import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyComponent from './components/MyComponent';
import Header from './ui/Header'
import CarouselComponent from './components/CarouselComponent'
import HorizontalScroller from './components/HorizontalScroller'
import Cube from './components/Cube';
import Categories from './components/Categories';
import Home from './components/Home';

function App() {
  let variable = 2;

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/newOrder" component={Categories} />
        </Switch>
        {/* <Cube></Cube> */}
        {/* <CarouselComponent toGet="categories"></CarouselComponent> */}
        {/* <MyComponent name={variable}></MyComponent> */}
      </div>
    </Router>
  );
}

export default App;
