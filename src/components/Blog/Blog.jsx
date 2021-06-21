import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import blogItem from '../../images/square-blog.svg'
import './style.css'

const Blog = () => {
    return (
        <Container className='wrapper-blog'>
            <h5 className='h5-style text-center m-75'>Insights from our blog</h5>
            <Row>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <img src={blogItem} alt='blog-item' className='m-39' />
                    <h5 className='h5-quote'>Some start text</h5>
                    <p className='p-common'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <img src={blogItem} alt='blog-item' className='m-39' />
                    <h5 className='h5-quote'>Some start text</h5>
                    <p className='p-common'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <img src={blogItem} alt='blog-item' className='m-39' />
                    <h5 className='h5-quote'>Some start text</h5>
                    <p className='p-common'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </Col>
            </Row>
        </Container>

    )
}

export default Blog