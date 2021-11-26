import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';

const ManageAllOrder = ({ manageAllOrder, pendingStatusChange, activeStatusChange }) => {
    const { _id, title, Name, city, email, phone, status } = manageAllOrder;
    const [order, setOrder] = useState();
    useEffect(() => {
        fetch(`https://grim-zombie-63256.herokuapp.com/orders/${_id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);

    return (
        <tr>
            <th scope="row">{title}</th>
            <td>{Name}</td>
            <td>{email}</td>
            <td>{city}</td>
            <td>{phone}</td>
            <td>{status}</td>
            <td>
                <NavDropdown title="Update" id="collasible-nav-dropdown">
                    {order?.status === "pending" ?
                        <NavDropdown.Item onClick={() => pendingStatusChange(_id)}>Active</NavDropdown.Item>
                        :
                        <NavDropdown.Item onClick={() => activeStatusChange(_id)}>pending</NavDropdown.Item>
                    }
                </NavDropdown>
            </td>
        </tr>
    );
};

export default ManageAllOrder;