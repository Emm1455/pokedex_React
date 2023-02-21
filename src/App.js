import "./App.css";
import CustomCard from "./components/CustomCard";
import UseGetData from "./components/CustomHooks/UseGetData";
import Preview from './components/Preview'

function App() {
  const [pokemon, weaknesses, isLoading, info, limitMaker] = UseGetData(1);

  return (
    <div className="App">
      {isLoading ? (
        <div className="CustomCard">
          <CustomCard
            img={pokemon.sprites.other["official-artwork"].front_default}
            data={pokemon}
            weaknesses={weaknesses}
            info={info}
            limitMaker={limitMaker}
          />
        </div>
      ) : (
        <>
          <Preview/>
        </>
      )}
    </div>
  );
}

export default App;
