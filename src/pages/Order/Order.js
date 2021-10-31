import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Order.css';

const Order = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { id } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`https://grim-zombie-63256.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    const title = service.title;
    console.log(title);
    const onSubmit = data => {
        const dataInfo = {
            ...data,
            status: "pending",
            title: title
        }
        fetch('https://grim-zombie-63256.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("Name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Order;