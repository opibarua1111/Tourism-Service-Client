import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar variant="dark" fixed="top" sticky="top" collapseOnSelect expand="lg" className="bg-red-400">
                <Container>
                    <Navbar.Brand href="#home">
                        <Nav.Link to="/home#home" className="text-white">
                            <img src="https://i.ibb.co/By8JxgC/tourism-icon.png" width="20%" className="inline-block" alt="" />Tourism
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-gray-50 hover:text-gray-700">Home</Nav.Link>
                        {user?.email && <Nav.Link as={HashLink} to="/addnewService" className="text-gray-50 hover:text-gray-700">Add Service</Nav.Link>}
                        {user?.email && <Nav.Link as={HashLink} to="/manageallorders" className="text-gray-50 hover:text-gray-700">Manage all orders</Nav.Link>}
                        {user?.email && <Nav.Link as={HashLink} to="/myorders" className="text-gray-50 hover:text-gray-700">My Orders</Nav.Link>}
                        {user?.email ?
                            <Button onClick={logOut} className="text-red-400 px-3 py-1 rounded-full bg-white text-lg font-medium" variant="light">Logout<i class="fas fa-sign-out-alt pl-1"></i></Button>
                            :
                            <Nav.Link className="text-red-400 hover:text-red-500 px-3 py-1 rounded-full bg-white text-lg font-medium inline-block" as={Link} to="/login">Login<i class="fas fa-sign-in-alt pl-1"></i></Nav.Link>
                        }
                        {user?.email && <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;