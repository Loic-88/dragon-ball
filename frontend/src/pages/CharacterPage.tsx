import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Character } from "../types/Character";

export default function CharacterPage() {
  const { id } = useParams();

  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`http://localhost:3000/logs/${id}`);
      const cleanData = (await rawData.json()) as Character;
      setCharacter(cleanData);
    }
    fetchData();
  }, []);

  if (character === null) {
    return <p>Waiting for Log n°{id}...</p>;
  }

  return (
    <p>
      {character.title} (n°{id})
    </p>
  );
}
