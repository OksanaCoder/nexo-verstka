import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import circle from '../../images/pink-circle.svg'
import './style.css'

const CircleSection = () => {
    return (
        <Container className='m-126'>
            <Row>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <img src={circle} alt='circle' />
                    <h5 className='h5-common'>Some start text</h5>
                    <p className='p-common'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <img src={circle} alt='circle' />
                    <h5 className='h5-common'>Some start text</h5>
                    <p className='p-common'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <img src={circle} alt='circle' />
                    <h5 className='h5-common'>Some start text</h5>
                    <p className='p-common'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </Col>
            </Row>
        </Container>
    )
}

export default CircleSection