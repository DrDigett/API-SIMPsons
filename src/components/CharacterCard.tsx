import { Link } from "react-router-dom";
import type { Character } from "../types/Character";
import { IMAGE_BASE_URL } from "../api/simpsonsApi";
import "./CharacterCard.css";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <Link
      to={`/character/${character.id}`}
      state={{ character }}
      className="card"
    >
      <img
        src={`${IMAGE_BASE_URL}${character.portrait_path}`}
        alt={character.name}
        loading="lazy"
      />
      <h3>{character.name}</h3>
      <p>{character.occupation}</p>
      <span className={`status ${character.status?.toLowerCase()}`}>
        {character.status}
      </span>
    </Link>
  );
};
