import { useCharacters } from "../hooks/useCharacters";
import { CharacterCard } from "./CharacterCard";
import { Pagination } from "./pagination/Pagination";
import './CharacterList.css'

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
      {/* 🔝 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasNext={!!next}
        hasPrev={!!prev}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <div className="grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* 🔽 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasNext={!!next}
        hasPrev={!!prev}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
