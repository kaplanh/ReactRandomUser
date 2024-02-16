import React, { useEffect, useState } from "react";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

const User = () => {
    const [loading, isLoading] = useState(true);
    const [userData, setUserData] = useState("");

    const getUser = () => {
        fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((data) => setUserData(data.results[0]))
            .catch((err) => console.log(err));
        isLoading(false);
    };
    useEffect(() => {
        getUser();
    }, []);
    console.log(userData);
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <h1 className="text-danger">
                    Loading...
                </h1>
            </div>
        );
    }
    return (
        <div
            className="card text-center m-auto mt-4 shadow"
            style={{ width: "18rem" }}
        >
            <img
                src={userData?.picture?.large}
                className="card-img-top  img-thumbnail shadow" //rounded-circle
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">
                    Hi, My Name is{" "}
                    <span className="text-danger d-block">
                        {userData?.name?.first} {}
                        {userData?.name?.last}
                    </span>
                </h5>
                <p className="card-text">
                    Register Date:{" "}
                    {new Date(userData?.dob?.date).toLocaleDateString("de-DE")}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <img
                        src={location}
                        width={20}
                        alt=""
                        className="d-block m-auto"
                    />
                    {userData?.location?.city}- {userData?.location?.country}
                </li>
                <li className="list-group-item">
                    <img
                        src={phone}
                        width={20}
                        alt=""
                        className="d-block m-auto"
                    />
                    {userData?.phone}{" "}
                </li>
                <li className="list-group-item">
                    <img
                        src={email}
                        width={20}
                        alt=""
                        className=" d-block m-auto"
                    />
                    {userData?.email}
                </li>
            </ul>
            <div className="card-body">
                <button onClick={getUser} className="btn btn-success">
                    New User
                </button>
            </div>
        </div>
    );
};

export default User;
