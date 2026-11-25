import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";
import "./css/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default App;
