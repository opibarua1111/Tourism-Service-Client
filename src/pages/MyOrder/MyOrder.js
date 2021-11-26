import React, { useEffect, useState } from 'react';

const MyOrder = ({ manageAllOrder }) => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch('https://grim-zombie-63256.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const { _id, title, Name, city, email, phone, status } = manageAllOrder;
    //Delete Order
    const handleDeleteOrder = id => {
        const url = `https://grim-zombie-63256.herokuapp.com/orders/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                    const remainingOrders = orders.filter(user => user._id !== id);
                    setOrders(remainingOrders);
                }
            })
    }
    return (
        <tr>
            <th scope="row">{title}</th>
            <td>{Name}</td>
            <td>{email}</td>
            <td>{city}</td>
            <td>{phone}</td>
            <td>{status}</td>
            <td className="text-center cursor-pointer hover:text-red-600" onClick={() => handleDeleteOrder(_id)}>Delete</td>
        </tr>
    );
};

export default MyOrder;