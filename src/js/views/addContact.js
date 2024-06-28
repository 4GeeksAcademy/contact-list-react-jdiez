import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    // const [contact, setContact] = useState({
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     address: address
    // });

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleChangeAddress = (e) => {
        setAddress(e.target.value)
    }


    const navigate = useNavigate();

    const handleSubmit = (e,name,email,phone,address) => {
        e.preventDefault();
        actions.fetchCreateContact(name,email,phone,address);
        console.log(name,email,phone,address);
        navigate("/home");
    }


    return (
        <div className="container">
            <h1 className="text-center mb-5 mt-5">Agregar nuevo Contacto</h1>
            <form className="row g-3" onSubmit={(e) => handleSubmit(e,name,email,phone,address)}>
                <div className="col-12">
                    <label htmlFor="fullName" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" onChange={handleChangeName} id="fullName" value={name}/>
                </div>
                <div>
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" onChange={handleChangeEmail} value={email}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputPassword4" className="form-label">Teléfono</label>
                    <input type="phone" className="form-control" id="inputPassword4" onChange={handleChangePhone} value={phone}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handleChangeAddress} value={address}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg w-100">Guardar</button>
                </div>
            </form>
            <br />
            <Link to="/">
                <button className="btn btn-warning">Ver contactos</button>
            </Link>
        </div>
    );
};
