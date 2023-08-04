import React, { useEffect } from "react";
// setuser y unSet user son reducer que hicimos en el slice de user
import { fetchAllUser, setDeletUser, setEditUser } from "../store/slices/users";

// metodos de redux
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserList = () => {
    // metodo dispatch paa poder usar el fetch all
    const dispatch = useDispatch();
    // traemos del estado global de la app la list de usuario[]
    // asi se consume la informacio que tenemos en el estado de users, en este caso traemos el valor de lista de usuario
    const { list } = useSelector((state) => state.users);

    useEffect(() => {
        if (list.length <= 0) {
            dispatch(fetchAllUser());
        }
    }, []);

    const handleDelet = (id) => {
        dispatch(setDeletUser(id));
    };

    return (
        <div className="container">
            <div className="row">
                {list.map((user) => (
                    <div key={user.id} className="col-md-3 my-2 ">
                        <div className="card p-2">
                            <img src={user.avatar} alt="avatar" />
                            <div className="card-body">
                                <h5 className="card-title">{`${user.first_name}  ${user.last_name}`}</h5>
                                <h5 className="card-text">{`${user.email}`}</h5>
                            </div>
                            <button
                                className="btn btn-danger my-2"
                                onClick={() => handleDelet(user.id)}
                            >
                                eliminar
                            </button>
                            <Link
                                className="btn btn-info my-2"
                                to={`/edit-list/${user.id}`}
                            >
                                editar
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
