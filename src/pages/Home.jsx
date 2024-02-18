import { Error, Loading, PaginationButtons, PokeballList } from "../components";
import useFetchPokemons from "../hooks/useFetchPokemons";

const Home = () => {
  const { pokemons, loading: loadingPokemons, error, page, totalPages } = useFetchPokemons();

  return (
    <>
      {totalPages && pokemons && (
        <PaginationButtons totalPages={totalPages} currentPage={page} />
      )}
      {error !== "" && <Error message={error} />}
      {loadingPokemons && <Loading />}
      {pokemons && <PokeballList pokemons={pokemons} />}
    </>
  );
};

export default Home;
