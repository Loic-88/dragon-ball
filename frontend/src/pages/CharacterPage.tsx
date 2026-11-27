import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Character } from "../types/Character";
import { toast } from "react-toastify";

export default function CharacterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`http://localhost:3000/characters/${id}`);
      const cleanData = (await rawData.json()) as Character;
      setCharacter(cleanData);
    }
    fetchData();
  }, []);

  const hDeleteCharacter = async () => {
    if (confirm("Etes vous sur de vouloir supprimer ce personnage ?")) {
      await fetch(`http://localhost:3000/characters/${id}`, {
        method: "DELETE",
      });
      navigate("/");
      toast("Article supprimé avec succès !");
    }
    // sinon
    //   🤷
  };

  if (character === null) {
    return <p>Waiting for Character n°{id}...</p>;
  }

  return (
    <article>
      <h2>
        {character.name} (n°{id})<button onClick={hDeleteCharacter}>X</button>
      </h2>
      <p>
        <img src={character.image} alt={character.name} />
      </p>
      <p>{character.category}</p>
      <p>{character.description}</p>
    </article>
  );
}
