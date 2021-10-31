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
            <Navbar variant="dark" fixed="top" sticky="top" collapseOnSelect expand="lg" className="bg-indigo-600">
                <Container>
                    <Navbar.Brand href="#home">Tourism</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white">Home</Nav.Link>
                        {user?.email && <Nav.Link as={HashLink} to="/addnewService" className="text-white">Add Service</Nav.Link>}
                        {user?.email && <Nav.Link as={HashLink} to="/manageallorders" className="text-white">Manage all orders</Nav.Link>}
                        {user?.email && <Nav.Link as={HashLink} to="/myorders" className="text-white">My Orders</Nav.Link>}
                        {user?.email ?
                            <Button onClick={logOut} className="text-white" variant="light">Logout</Button>
                            :
                            <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
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