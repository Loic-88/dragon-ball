import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Character } from "../types/Character";
import "../css/HomePage.css";

export default function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3000/characters");
      const cleanData = (await rawData.json()) as Character[];
      setCharacters(cleanData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Personnages</h1>
      {characters.map((character) => {
        return (
          <p key={character.id}>
            <div className="bloc">
              <Link className="personnage" to={`/${character.id}`}>
                {character.name}
              </Link>
              <Link className="image" to={`/${character.id}`}>
                <img src={character.image} alt={character.name} />
              </Link>
            </div>
          </p>
        );
      })}
    </>
  );
}
