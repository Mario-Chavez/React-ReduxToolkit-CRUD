import React, { useEffect } from "react";
import { fetchAllUser } from "../store/slices/users";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
    // metodo dispatch paa poder usar el fetch all
    const dispatch = useDispatch();
    // traemos del estado global de la app la list de usuario
    const { list } = useSelector((state) => state.users);
    const {} = useSelector((state) => state.addUser);

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
        </div>
    );
};

export default UserList;
