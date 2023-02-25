import "./App.css";

import SignInComponent from './components/SignInComponent';
import {Routes, Route} from 'react-router-dom';
import PokedexComponent from "./components/PokedexComponent";

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInComponent/>}/>
        <Route path="/pokedex" element={<PokedexComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
