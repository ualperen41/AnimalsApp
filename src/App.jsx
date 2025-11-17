import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth-page";
import HomePage from "./pages/home-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
