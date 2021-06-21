import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './style.css'
import TextSection from '../TextSection/TextSection'
import Comments from '../Comments/Comments'
import GetStartedSection from '../GetStartedSection/GetStartedSection'
import CircleSection from '../CircleSection/CircleSection'
import Blog from '../Blog/Blog'
import Footer from '../Footer/Footer'

const Platform = () => {
    return (
        <>
            <Container className='platform-wrapper' fluid>
                <h5 className='h5-style text-center'>PLAYTHEM Games</h5>
                <p className='small-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                <Container className='m-86'>
                    <Row className='align-items-center'>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <div className='square'></div>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <p className='square-text'>Some start text</p>
                            <small className='text-small-square'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</small>
                        </Col>

                    </Row>
                    <Row className='align-items-center m-52'>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <p className='square-text'>Some start text</p>
                            <small className='text-small-square'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</small>

                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <div className='square'></div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <TextSection />
            <Comments />
            <GetStartedSection title='Get Started Now' />
            <CircleSection />
            <Blog />
            <Footer />
        </>
    )
}

export default Platform