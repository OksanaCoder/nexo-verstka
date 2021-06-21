import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import preview from '../../images/preview.svg'
import './style.css'

const Games = () => {
    return (
        <Container className='wrapper-games'>
            <h5 className='h5-style text-center'>PLAYTHEM Games</h5>
            <p className='small-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            <Row className='text-center margin-small'>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <img src={preview} alt='games' />
                    <h6 className='text-games'>PLAYTHEM Games</h6>
                    <Button className='btn-nav games active mb-2'>Preview Game</Button>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <img src={preview} alt='games' />
                    <h6 className='text-games'>PLAYTHEM Games</h6>
                    <Button className='btn-nav games inactive mb-2'>Preview Game</Button>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <img src={preview} alt='games' />
                    <h6 className='text-games'>PLAYTHEM Games</h6>
                    <Button className='btn-nav games inactive mb-2'>Preview Game</Button>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <img src={preview} alt='games' />
                    <h6 className='text-games'>PLAYTHEM Games</h6>
                    <Button className='btn-nav games inactive mb-2'>Preview Game</Button>
                </Col>
            </Row>
        </Container>
    )
}


export default Games