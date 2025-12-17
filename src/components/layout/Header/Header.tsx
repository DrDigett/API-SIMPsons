import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src="https://thesimpsonsapi.com/logo.webp" alt="simpson logo" />
      <ul>
        <li><a href="#">API</a></li>
        <li><a href="#">Portafolio</a></li>
      </ul>
    </header>
  );
};