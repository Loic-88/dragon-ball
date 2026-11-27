import { Link, Route, Routes } from "react-router";
import "./css/App.css";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/">Back to la maison !</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default App;
