import { useState } from "react";
import Input from "../Input";
import UserCard from "../UserCard/UserCard";
import './registrationForm.css';

const RegistrationForm = () => {

    const [phones, setPhone] = useState([]);

    const [model, setModel] = useState();
    const [ios, setIos] = useState();
    const [color, setColor] = useState();
    const [price, setPrice] = useState();

    const onAddPhone = () => {
        const phone = {
            model, 
            ios, 
            color,
            price
        };
        setPhone([...phones, phone]);
        setModel('');
        setIos('');
        setColor('');
        setPrice('');
    }


    const onGetModel = (value) => {
        setModel(value)
    };

    const onGetIos = (value) => {
        setIos(value)
    };

    const onGetColor = (value) => {
        setColor(value)
    };

    const onGetPrice = (value) => {
        setPrice(value)
    }

    return (
        <div className="common">
            <Input label="Model:" placeholder="Enter Iphone model" onChange={onGetModel} value={model} />
            <Input label="IOS:" placeholder="Enter Your Ios model" onChange={onGetIos} value={ios} />
            <Input label="Color:" placeholder="Enter Color" onChange={onGetColor} value={color} />
            <Input label="Price:" placeholder="Enter price which you want to see" onChange={onGetPrice} value={price} />
            <button type="button" onClick={onAddPhone}>Add Phone</button>
            <div className="users-list">
                { phones.map((phone) => {
                    const { model, ios, color, price } = phone;
                    return (<UserCard model={model} ios={ios} color={color} price={price} />)
                }) }
            </div>
        </div>
    );
};

export default RegistrationForm;
