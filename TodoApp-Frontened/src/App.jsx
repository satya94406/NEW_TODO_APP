import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./userAuthentication/Login";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;