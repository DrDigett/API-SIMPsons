import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/simpsonsApi";
import type { Character } from "../types/Character";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [next, setNext] = useState<string | null>(null);
  const [prev, setPrev] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    fetchCharacters(currentPage)
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.pages);
        setNext(data.next);
        setPrev(data.prev);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [currentPage]);

  return {
    characters,
    currentPage,
    totalPages,
    next,
    prev,
    setCurrentPage,
    loading,
    error,
  };
};
