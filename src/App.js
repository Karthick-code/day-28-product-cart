import { context } from './components/context';
import './App.css';
import { Cards } from "./components/Cards";
import data from "./components/data.json"

function App() {
  
  return (
    <div className="App">
      <div className="cart">Cart</div>
      <context.Provider value={data.products}>
        <div className="cards"> <Cards /></div>
      </context.Provider>
    </div>
  );
}


export default App;

