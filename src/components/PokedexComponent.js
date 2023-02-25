import UseGetData from "./CustomHooks/UseGetData";
import CustomCard from "./CustomCard";
import Preview from './Preview';

function PokedexComponent() {
    const [pokemon, weaknesses, isLoading, info, limitMaker] = UseGetData(1);
    return (
        <>
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
        </>
    )
}

export default PokedexComponent;