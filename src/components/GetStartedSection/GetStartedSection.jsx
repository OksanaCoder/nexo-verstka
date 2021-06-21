import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './style.css'

const GetStartedSection = (props) => {
    return (
        <Container className='wrapper-get-started' fluid>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={9} md={12} sm={12} xs={12}>
                        <h5 className='m-70-5'>Some start text</h5>
                        <p className='m-53'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </Col>
                    <Col lg={3} md={12} sm={12} xs={12}>
                        <Button className='btn-nav inactive-transparent btn-text'>{props.title}</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default GetStartedSection