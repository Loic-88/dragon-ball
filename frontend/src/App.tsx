import { Route, Routes } from "react-router";
import "./css/App.css";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default App;
