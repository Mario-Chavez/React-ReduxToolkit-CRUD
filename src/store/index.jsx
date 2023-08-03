// creamos el store y la configuramos
import { configureStore } from "@reduxjs/toolkit";
// reducer
// traemos el slice de users (generalmente hay mas slice dependiendo del tamaño de la app)
import { userSliceReducer, addUserReducer } from "./slices/users/index";

// Çeste configuracion une todos los reducer un en solo store
export default configureStore({
    reducer: {
        users: userSliceReducer,
        addUser: addUserReducer,
    },
});
