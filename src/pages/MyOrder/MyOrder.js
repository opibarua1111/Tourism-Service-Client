import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

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
        <div>
            <div className="grid grid-cols-7 gap-1 py-2 border-b border-gray-600">
                <div>{title}</div>
                <div>{Name}</div>
                <div>{email}</div>
                <div>{city}</div>
                <div>{phone}</div>
                <div>{status}</div>
                <div>
                    <Navbar className="text-center flex justify-center" title="Delete your order" id="collasible-nav-dropdown">
                        <Nav className="text-center cursor-pointer" onClick={() => handleDeleteOrder(_id)}>Delete</Nav>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;