import type { Character } from "./Character";

export interface PaginatedResponse {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
  results: Character[];
}
