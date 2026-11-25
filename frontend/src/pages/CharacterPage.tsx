import { useParams } from "react-router";

export default function CharacterPage() {
  const { id } = useParams();

  return <p>I iz CharacterPage (n°{id})</p>;
}
