import type { PaginatedResponse } from "../types/PaginatedResponse";

export const API_BASE = "https://thesimpsonsapi.com/api/characters";
export const IMAGE_BASE_URL = "https://cdn.thesimpsonsapi.com/500";

export const fetchCharacters = async (
  page: number
): Promise<PaginatedResponse> => {
  const response = await fetch(`${API_BASE}?page=${page}`);

  if (!response.ok) {
    throw new Error("Error al obtener personajes");
  }

  return response.json();
};
