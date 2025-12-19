import { useLocation, Link } from "react-router-dom";
import type { Character } from "../types/Character";
import { IMAGE_BASE_URL } from "../api/simpsonsApi";

import "./CharacterDetail.css"

export const CharacterDetail = () => {
  const location = useLocation();
  const character = (location.state as { character: Character })?.character;

  if (!character) return <p>No se encontró el personaje</p>;

  return (
    <section className="character-detail">
    <header className="character-header">
        <Link to="/">← Volver</Link>
    </header>

    <main className="character-main">
        <div className="character-image">
        <img
            src={`${IMAGE_BASE_URL}${character.portrait_path}`}
            alt={character.name}
        />
        </div>

        <div className="character-info">
        <h1>{character.name}</h1>

        <ul className="character-meta">
            <li><span>Edad</span>{character.age}</li>
            <li><span>Nacimiento</span>{character.birthdate}</li>
            <li><span>Género</span>{character.gender}</li>
            <li><span>Ocupación</span>{character.occupation}</li>
            <li><span>Estado</span>{character.status}</li>
        </ul>
        </div>
    </main>

    <section className="character-phrases">
        <h2>Frases</h2>

        <div className="phrases-grid">
        {character.phrases.map((phrase, i) => (
            <div key={i} className="phrase-card">
            “{phrase}”
            </div>
        ))}
        </div>
    </section>
    </section>
  );
};
