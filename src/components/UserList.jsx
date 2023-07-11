import React, { useEffect } from "react";
import { fetchAllUser, setUser, unSetUser } from "../store/slices/users";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
    // metodo dispatch paa poder usar el fetch all
    const dispatch = useDispatch();
    // traemos del estado global de la app la list de usuario
    const { list } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchAllUser());
    }, []);

    return (
        <div className="container">
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
            <button
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
        </div>
    );
};

export default UserList;
