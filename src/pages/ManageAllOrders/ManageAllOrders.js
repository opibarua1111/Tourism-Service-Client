import { useEffect, useState } from 'react';
import { NavDropdown, Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [manageAllorders, setManageAllorders] = useState([]);
    useEffect(() => {
        fetch('https://grim-zombie-63256.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setManageAllorders(data))
    }, [manageAllorders]);

    const handleUpdateOrder = (id, state) => {
        const status = state;
        const url = `https://grim-zombie-63256.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    alert("status Update Successfully");
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
                    manageAllorders?.map(manageAllOrder => <tr
                        key={manageAllOrder._id}
                    >
                        <th scope="row">{manageAllOrder.title}</th>
                        <td>{manageAllOrder.Name}</td>
                        <td>{manageAllOrder.email}</td>
                        <td>{manageAllOrder.city}</td>
                        <td>{manageAllOrder.phone}</td>
                        <td>{manageAllOrder.status}</td>
                        <td>
                            <NavDropdown title="Update" id="collasible-nav-dropdown">
                                {manageAllOrder?.status === "pending" ?
                                    <NavDropdown.Item onClick={() => handleUpdateOrder(manageAllOrder._id, "active")}>Active</NavDropdown.Item>
                                    :
                                    <NavDropdown.Item onClick={() => handleUpdateOrder(manageAllOrder._id, "pending")}>pending</NavDropdown.Item>
                                }
                            </NavDropdown>
                        </td>
                    </tr>)
                }
            </tbody>
        </Table>
    );
};

export default ManageAllOrders;