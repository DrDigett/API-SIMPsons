import "./Header.css";
import { API_BASE } from "../../../api/simpsonsApi";

export const Header = () => {
  return (
    <header className="header">
      <img src="https://thesimpsonsapi.com/logo.webp" alt="simpson logo" />
      <ul>
        <li><a href={API_BASE}>API</a></li>
        <li><a href="https://drdigett.github.io/portafolio">Portafolio</a></li>
      </ul>
    </header>
  );
};