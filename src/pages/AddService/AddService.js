import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://grim-zombie-63256.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service bg-gray-500 md:w-6/12 mx-auto mb-10 pb-3 rounded-lg">
            <h2 className="my-5 pt-3 text-2xl font-bold text-white">Please Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="h-10 rounded pl-2" type="text" {...register("title")} placeholder="Title" />
                <textarea className="rounded pl-2" {...register("description")} placeholder="Description" />
                <input className="h-10 rounded pl-2" type="number" {...register("price")} placeholder="Price" />
                <input className="h-10 rounded pl-2" {...register("img")} placeholder="image url" />
                <input className=" rounded bg-red-400 hover:bg-red-500 text-white px-8 py-2 duration-300 hover:scale-100 focus:outline-none poppins transform transition" type="submit" />
            </form>
        </div>
    );
};

export default AddService;