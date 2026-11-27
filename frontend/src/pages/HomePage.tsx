import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Character } from "../types/Character";

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
      <h1>Welcome Home !</h1>
      {characters.map((character) => {
        return (
          <p key={character.id}>
            <Link to={`/${character.id}`}>{character.name}</Link>
          </p>
        );
      })}
    </>
  );
}
