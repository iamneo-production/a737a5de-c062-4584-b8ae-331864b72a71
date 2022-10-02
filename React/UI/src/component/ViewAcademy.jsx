import React,{useState} from 'react';
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row,Col } from 'react-bootstrap';
import Enrolledcourse from "./Enrolledcourse";

const ViewAcademy = () =>{
    
    
    return (
        <>
            <Navbar style={{backgroundColor:'grey'}}>
                    <Container fluid>
                        <Navbar.Brand href="/viewacademy">Abacus academy<a href="/"></a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link id="userAcademy" style={{ paddingLeft: '100px' }}>Academy</Nav.Link> 
                            <Nav.Link id="userEnrolledCourse" 
                             style={{ paddingLeft: '150px' }}>Enrolled course</Nav.Link> 
                            <Nav.Link id = "logout" style={{ paddingLeft: '100px' }}>Logout</Nav.Link> 
                        </Nav>
                         </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        </>
    )
}
export default ViewAcademy;