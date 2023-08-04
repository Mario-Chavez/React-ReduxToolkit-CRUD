import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Form from "./components/Formulario.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// el provider es para pasar todos lo store a nuestra app convirtiendose como padre
// de tpda la app despues pasamos el strore que es global q hemos creado
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Form />}></Route>
                <Route exact path="/list" element={<UserList />}></Route>
                <Route exact path="/edit-list/:id" element={<Form />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
