import { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  category: string;
  description: string;
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
      <h1>Welcome Home !</h1>
      {characters.map((character) => (
        <article key={character.id}>
          <h2>{character.name}</h2>
          <p>{character.category}</p>
          <p>{character.description}</p>
        </article>
      ))}
    </>
  );
}

export default App;
