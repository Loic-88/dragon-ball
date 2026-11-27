import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Back to la maison !</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default App;
