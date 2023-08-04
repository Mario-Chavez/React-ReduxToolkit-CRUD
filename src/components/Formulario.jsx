import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setOneUser, setEditUser } from "../store/slices/users";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Formulario = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const listUser = useSelector((state) => state.users);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset,
    } = useForm();

    useEffect(() => {
        if (params) {
            const userFound = listUser.list.find((user) => user.id == params.id);
            setValue("first_name", userFound.first_name);
            setValue("last_name", userFound.last_name);
            setValue("email", userFound.email);
            setValue("avatar", userFound.avatar);
        }
    }, []);

    const onSubmit = (data) => {
        dispatch(setOneUser({ ...data, id: uuid() }));
        reset();
    };
    const handleEdit = (id) => {
        dispatch(setEditUser(id));
    };

    return (
        <div className="container mt-5">
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
        </div>
    );
};

export default Formulario;
