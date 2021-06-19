import React from 'react';
import {
    Container, 
    Row,
    Col
} from 'reactstrap';
import PhoneImg from '../media/phone.png';
import UserImg from '../media/profile.png';

function NavigationBar() {
    return(
        <>
        <div className="navbar-div">
            <Container fluid>
                <Row>
                    <Col className="py-2 " sm={{ size: 3 }} md={{ size: 2 }}>
                        <img className="logo-img" src={ PhoneImg } alt="phone" />
                    </Col>
                    <Col className="py-2 align-items-center d-flex" md={{ size: 6, offset: 1 }} sm={{ size: 6, offset: 0 }}>
                        <input type="search" className="search-input border-0 p-2 form-control" placeholder="Search" />
                    </Col>
                    <Col className="text-end py-2 " sm={{ size: 3 }} md={{ size: 2, offset: 1 }}>
                        <img className="logo-img" src={ UserImg } alt="phone" />
                    </Col>
                </Row>
            </Container>
        </div>
            
        </>
    )
}

export default NavigationBar;

