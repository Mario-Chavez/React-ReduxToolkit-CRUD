import { configureStore } from "@reduxjs/toolkit";
// reducer
// traemos el slice de users (generalmente hay mas slice dependiendo del tamaño de la app)
import users from "./slices/users";
export default configureStore({
    reducer: {
        users,
    },
});
