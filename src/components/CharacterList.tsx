import type { Character } from "../types/Character";
import { useCharacters } from "../hooks/useCharacters";
import {CharacterCard} from "./CharacterCard";
import {Pagination} from "./pagination/Pagination";
import "./CharacterList.css";

const CharacterList = () => {
  const {
    characters,
    currentPage,
    totalPages,
    next,
    prev,
    setCurrentPage,
    loading,
    error,
  } = useCharacters();

  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasNext={Boolean(next)}
        hasPrev={Boolean(prev)}
        onPageChange={setCurrentPage}
      />

      <div className="grid">
        {characters.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasNext={Boolean(next)}
        hasPrev={Boolean(prev)}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default CharacterList;
