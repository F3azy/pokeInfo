import { useParams } from "react-router-dom";
import { Error, Loading, PaginationButtons, PokeballList } from "../components";
import useFetchPokemons from "../hooks/useFetchPokemons";
import useFetchTotalPages from "../hooks/useFetchTotalPages";

const Home = () => {
  const { p = 1 } = useParams();

  const { pokemons, loading: loadingPokemons, error } = useFetchPokemons(p);

  const { totalPages } = useFetchTotalPages();

  return (
    <>
      {totalPages && pokemons && (
        <PaginationButtons totalPages={totalPages} currentPage={parseInt(p)} />
      )}
      {error !== "" && <Error message={error} />}
      {loadingPokemons && <Loading />}
      {pokemons && <PokeballList pokemons={pokemons} />}
    </>
  );
};

export default Home;
