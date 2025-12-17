import { useCharacters } from "../../hooks/useCharacters";
import { CharacterCard } from "../CharacterCard";
import { Pagination } from "../pagination/Pagination";
import type { Character } from "../../types/Character";

export const CharacterList = () => {
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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {/* 🔝 Barra superior */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        hasNext={Boolean(next)}
        hasPrev={Boolean(prev)}
      />

      <div className="grid">
        {characters.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* 🔽 Barra inferior */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        hasNext={Boolean(next)}
        hasPrev={Boolean(prev)}
      />
    </>
  );
};
