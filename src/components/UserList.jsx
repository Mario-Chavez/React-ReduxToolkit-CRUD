import React, { useEffect } from "react";
// setuser y unSet user son reducer que hicimos en el slice de user
import { fetchAllUser, setUser, unSetUser } from "../store/slices/users";
// metodos de redux
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";

const UserList = () => {
    // metodo dispatch paa poder usar el fetch all
    const dispatch = useDispatch();

    // traemos del estado global de la app la list de usuario[]
    // asi se consume la informacio que tenemos en el estado de users, en este caso traemos el valor de lista de usuario
    const { list } = useSelector((state) => state.users);
    const { user } = useSelector((state) => state.addUser);
    console.log(user);

    useEffect(() => {
        dispatch(fetchAllUser());
    }, []);
    const handleSubmit = () => {};
    return (
        <div className="container">
            <Form onSubmit={handleSubmit} className="w-75 mx-auto">
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Escribe tu nombre"
                        // onChange={(e) => setNombre(e.target.value)}
                        // value={nombre}
                    />

                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Escribe tu apellido"
                        // onChange={(e) => setApellido(e.target.value)}
                        // value={apellido}
                    />

                    <Form.Label>Direccion de Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email@ejemplo.com"
                        // onChange={(e) => setEmail(e.target.value)}
                        // value={email}
                    />
                    <div className="mt-4 d-flex justify-content-end">
                        <Button type="submit" className="px-5">
                            Enviar
                        </Button>
                    </div>
                </Form.Group>
            </Form>
            <div className="row">
                {list.map((user, index) => (
                    <div key={index} className="col-md-3">
                        <div className="card ">
                            <img src={user.avatar} alt="avatar" />
                            <div className="card-body">
                                <h5 className="card-title">{`${user.first_name}${user.last_name}`}</h5>
                                <h5 className="card-text">{`${user.email}`}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <button
                className="btn btn-primary"
                onClick={() =>
                    dispatch(
                        setUser({
                            id: "22222222",
                            email: "isabella@gmail.com",
                            first_name: "Isabella",
                            last_name: "chavez",
                            avatar: "isa avatar...dhghdgd....",
                        })
                    )
                }
            >
                agregar
            </button>
            <button className="btn btn-primary" onClick={() => dispatch(unSetUser())}>
                eliminar
            </button> */}
        </div>
    );
};

export default UserList;
