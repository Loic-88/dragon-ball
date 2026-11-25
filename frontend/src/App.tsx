import { useEffect, useState } from "react";
import "./css/App.css";
type Character = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
};

function App() {
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
      {characters.map((character) => (
        <article key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>{character.category}</p>
          <p>{character.description}</p>
        </article>
      ))}
    </>
  );
}

export default App;
