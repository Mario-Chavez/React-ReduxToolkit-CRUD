import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

const initialState = {
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
};

// slice de users lista de usuario
export const userSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
    },
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        },
        setOneUser: (state, action) => {
            state.list.push(action.payload);
        },
        setEditUser: (state, action) => {
            console.log(action.payload);
            const { email, first_name, last_name, avatar, id } = action.payload;
            const userFound = state.list.find((user) => user.id === id);
            if (userFound) {
                (userFound.first_name = first_name),
                    (userFound.last_name = last_name),
                    (userFound.avatar = avatar),
                    (userFound.email = email);
            }
        },
        setDeletUser: (state, action) => {
            const userFound = state.list.find((user) => user.id === action.payload);
            if (userFound) {
                // busca el indice y lo corta al array de usuarios
                state.list.splice(state.list.indexOf(userFound), 1); //state.list.indexOf(userFound) es el idice de user en el  array
            }
        },
    },
});

// agregar un ususario nuevo
// Slice para agregar un nuevo usuario
export const addUserSlice = createSlice({
    name: "addUser",
    initialState: {
        user: initialState,
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.avatar = action.payload.avatar;
        },
        unSetUser: (state) => {
            state.id = "";
            state.email = "";
            state.first_name = "";
            state.last_name = "";
            state.avatar = "";
        },
    },
});

// exportamos para que lo pueda usar el configStore
export const userSliceReducer = userSlice.reducer;
// exportamos los metodos del user slice
export const { setUserList, setOneUser, setDeletUser, setEditUser } = userSlice.actions;

// Reducers y acciones del slice addUser
export const addUserReducer = addUserSlice.reducer;
export const { setUser, unSetUser } = addUserSlice.actions;

// se usa dispatch para poder setear en el slice
export const fetchAllUser = () => (dispatch) => {
    axios
        .get("http://localhost:3000/user")
        .then((respuesta) => {
            // console.log(respuesta);
            dispatch(setUserList(respuesta.data));
        })
        .catch((error) => console.log(error));
};
export const fetchPostUser = (data) => (dispatch) => {
    axios
        .post("http://localhost:3000/user", data)
        .then((respuesta) => {
            dispatch(setUserList(respuesta.data));
        })
        .catch((error) => console.log(error));
};
