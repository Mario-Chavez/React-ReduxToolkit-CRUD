import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
//  redux
import { Provider } from "react-redux";
// store
import store from "./store";

// el provider es para pasar todos lo store a nuestra app convirtiendose como padre
// de tpda la app despues pasamos el strore que es global q hemos creado
function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <UserList />
        </Provider>
    );
}

export default App;
