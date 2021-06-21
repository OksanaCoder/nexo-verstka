import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './style.css'

const TextSection = () => {
    return (
        <Container className='text-section-wrapper text-center' fluid>
            <h5 className='h5-style text-center'>Some start text</h5>
            <p className='small-text-italic'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            <Button className='btn-nav active btn-text'>Get Started Now</Button>
        </Container>
    )
}

export default TextSection