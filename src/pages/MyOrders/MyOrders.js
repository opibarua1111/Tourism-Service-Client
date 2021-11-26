import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://grim-zombie-63256.herokuapp.com/order/byEmail', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(orders => {
                setMyOrders(orders);
            })
    }, [user.email])
    //Delete Order
    const handleDeleteOrder = id => {
        const url = `https://grim-zombie-63256.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                    const remainingOrders = myOrders.filter(user => user._id !== id);
                    setMyOrders(remainingOrders);
                }
            })
    }
    return (
        <Table responsive="xl" striped bordered hover>
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    myOrders.map(manageAllOrder => <tr
                        key={manageAllOrder._id}
                    >
                        <th scope="row">{manageAllOrder.title}</th>
                        <td>{manageAllOrder.Name}</td>
                        <td>{manageAllOrder.email}</td>
                        <td>{manageAllOrder.city}</td>
                        <td>{manageAllOrder.phone}</td>
                        <td>{manageAllOrder.status}</td>
                        <td className="text-center cursor-pointer hover:text-red-600" onClick={() => handleDeleteOrder(manageAllOrder._id)}>Delete</td>
                    </tr>)
                }
            </tbody>
        </Table>
    );
};

export default MyOrders;