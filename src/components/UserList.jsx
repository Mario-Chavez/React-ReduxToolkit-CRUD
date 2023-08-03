import React, { useEffect } from "react";
// setuser y unSet user son reducer que hicimos en el slice de user
import {
    fetchAllUser,
    setUser,
    unSetUser,
    setOneUser,
    setDeletUser,
    setEditUser,
} from "../store/slices/users";
import { v4 as uuid } from "uuid";
// metodos de redux
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const UserList = () => {
    // metodo dispatch paa poder usar el fetch all
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset,
    } = useForm();

    // traemos del estado global de la app la list de usuario[]
    // asi se consume la informacio que tenemos en el estado de users, en este caso traemos el valor de lista de usuario
    const { list } = useSelector((state) => state.users);
    // const { user } = useSelector((state) => state.addUser);
    // console.log(user);

    useEffect(() => {
        dispatch(fetchAllUser());
    }, []);

    const onSubmit = (data) => {
        dispatch(setOneUser({ ...data, id: uuid() }));
        reset();
    };
    const handleEdit = (id) => {
        dispatch(setEditUser(id));
    };
    const handleDelet = (id) => {
        dispatch(setDeletUser(id));
    };
    return (
        <div className="container">
            <Form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Escribe tu nombre"
                        {...register("first_name", {
                            required: "El nombre de usuario es obligatorio",
                        })}
                    />

                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Escribe tu apellido"
                        {...register("last_name", {
                            required: "El apellido de usuario es obligatorio",
                        })}
                    />

                    <Form.Label>Direccion de Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email@ejemplo.com"
                        {...register("email", {
                            required: "El email de usuario es obligatorio",
                        })}
                    />
                    <Form.Label>Avatar:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Escribe tu avatar"
                        {...register("avatar", {
                            required: "El avatar de usuario es obligatorio",
                        })}
                    />

                    <div className="mt-4 d-flex justify-content-end">
                        <Button type="submit" className="px-5">
                            Enviar
                        </Button>
                    </div>
                </Form.Group>
            </Form>
            <div className="row">
                {list.map((user) => (
                    <div key={user.id} className="col-md-3 my-2 ">
                        <div className="card p-2">
                            <img src={user.avatar} alt="avatar" />
                            <div className="card-body">
                                <h5 className="card-title">{`${user.first_name}${user.last_name}`}</h5>
                                <h5 className="card-text">{`${user.email}`}</h5>
                            </div>
                            <button
                                className="btn btn-danger my-2"
                                onClick={() => handleDelet(user.id)}
                            >
                                eliminar
                            </button>
                            <button
                                className="btn btn-info my-2"
                                onClick={() => handleEdit(user.id)}
                            >
                                edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
