import { useCharacters } from "../../hooks/useCharacters";
import { CharacterCard } from "../CharacterCard";
import { Pagination } from "../pagination/Pagination";

export const CharacterList = () => {
  const {
    paginatedCharacters,
    currentPage,
    totalPages,
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
      />

      <div className="grid">
        {paginatedCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* 🔽 Barra inferior */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
