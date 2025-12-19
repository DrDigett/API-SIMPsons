import { useEffect, useState } from "react";
import type { Character } from "../types/Character";
import { IMAGE_BASE_URL } from "../api/simpsonsApi";

export const useCharacter = (id: string | undefined) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`${IMAGE_BASE_URL}/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch(() => setError("No se pudo cargar el personaje"))
      .finally(() => setLoading(false));
  }, [id]);

  return { character, loading, error };
};
