import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';

const ManageAllOrder = ({ manageAllOrder }) => {
    const { _id, title, Name, city, email, phone, status } = manageAllOrder;
    const [order, setOrder] = useState();
    useEffect(() => {
        fetch(`https://grim-zombie-63256.herokuapp.com/orders/${_id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);
    const pendingStatusChange = () => {
        const updateStatus = {
            ...manageAllOrder,
            status: "active"
        }
        console.log(updateStatus);

        setOrder(updateStatus);
        handleUpdateOrder();

    }
    const activeStatusChange = () => {
        const updateStatus = {
            ...manageAllOrder,
            status: "pending"
        }
        console.log(updateStatus);
        setOrder(updateStatus);
        handleUpdateOrder();


    }

    const handleUpdateOrder = () => {
        console.log(order);
        const url = `https://grim-zombie-63256.herokuapp.com/orders/${_id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="grid grid-cols-7 gap-1 py-2 border-b border-gray-600">
            <div>{title}</div>
            <div>{Name}</div>
            <div>{email}</div>
            <div>{city}</div>
            <div>{phone}</div>
            <div>{status}</div>
            <div>
                <NavDropdown title="Update" id="collasible-nav-dropdown">
                    {order?.status === "pending" ?
                        <NavDropdown.Item onClick={pendingStatusChange}>Active</NavDropdown.Item>
                        :
                        <NavDropdown.Item onClick={activeStatusChange}>pending</NavDropdown.Item>
                    }
                </NavDropdown>
            </div>
        </div>
    );
};

export default ManageAllOrder;