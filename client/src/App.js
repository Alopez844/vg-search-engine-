import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Games from "./components/Games/Games";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/games" element={<Games/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
