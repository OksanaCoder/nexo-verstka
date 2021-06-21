import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'
import quote from '../../images/quotes.svg'

const Comments = () => {
    return (
        <Container className='wrapper-quote'>
            <Row>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <img src={quote} />
                    <h5 className='h5-quote'>Some start text</h5>
                    <p className='h5-info'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <img src={quote} />
                    <h5 className='h5-quote'>Some start text</h5>
                    <p className='h5-info'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <img src={quote} />
                    <h5 className='h5-quote'>Some start text</h5>
                    <p className='h5-info'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Comments