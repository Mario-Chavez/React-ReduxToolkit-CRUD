// creamos el store
import { configureStore } from "@reduxjs/toolkit";
// reducer
// traemos el slice de users (generalmente hay mas slice dependiendo del tamaño de la app)
import { userSliceReducer, addUserReducer } from "./slices/users/index";

export default configureStore({
    reducer: {
        users: userSliceReducer,
        addUser: addUserReducer,
    },
});
