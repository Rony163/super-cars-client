import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar fixed='top' expand="lg" style={{ backgroundColor: '#212529' }}>
                <Container fluid>
                    <img style={{ width: '80px', height: '40px' }} src={logo} alt="" />
                    <Navbar.Brand className="ms-3 text-info" as={HashLink} to='/home'>Super Cars</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 ms-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} className="text-info" to="/home">Home</Nav.Link>
                            <Nav.Link className="text-info me-2" as={Link} to='/sharedCollections'>Collections</Nav.Link>
                        </Nav>

                        {!user?.email ?
                            <div>
                                <Nav.Link className="text-info me-2" as={Link} to='/login'>Login</Nav.Link>
                            </div>
                            :
                            <div className='d-flex flex-column flex-lg-row'>
                                <Nav.Link as={HashLink} className="text-info" to="/dashboard">Dashboard</Nav.Link>
                                <span className="text-danger p-2"><i className="fas fa-user"></i>{user?.displayName}</span>
                                <button className="btn btn-info" onClick={logout}>LogOut </button>
                            </div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigation;