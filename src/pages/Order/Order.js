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
            <h2 className="text-4xl font-semibold mt-3 text-gray-600">Order Faviourite Tourism</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-12" id="services">
                <div className="flex justify-center items-center">
                    <div className="relative bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-75 p-3 rounded-lg w-9/12">
                        <img className=" mx-auto transform transition duration-300 hover:scale-105" src={service?.img} alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg font-medium">{service?.title}</h1>
                            <p className="text-gray-500 poppins text-sm text-center">{service?.description}</p>
                            <h3 className="text-gray-700 poppins text-2xl text-center font-bold">{service?.price}$</h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <form className="order-form p-16 rounded-3xl bg-green-300" onSubmit={handleSubmit(onSubmit)}>
                        <input className="border-0" readOnly defaultValue={user.displayName} {...register("Name")} />
                        <input className="border-0" readOnly defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input className="border-0" placeholder="Address" defaultValue="" {...register("address")} />
                        <input className="border-0" placeholder="City" defaultValue="" {...register("city")} />
                        <input className="border-0" placeholder="Phone" defaultValue="" {...register("phone")} />
                        <input className="bg-green-400 hover:bg-green-500 border-0 text-white font-bold" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;