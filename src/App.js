import './App.css';
import logo from './images/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home'
import Platform from './components/Platform/Platform'
import Pricing from './components/Pricing/Pricing'


function App() {
  return (
    <>
      <Router>
        <Container>
          <Navbar collapseOnSelect expand="lg" className='nav-top'>
            <Container className='d-flex align-center'>
              <Navbar.Brand><Link to="/"><img src={logo} className='logo' /></Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                <Nav className='ml-auto'>
                  <Nav.Link><Link to="/games" className='text-link text-nav'>Our games</Link></Nav.Link>
                  <Nav.Link><Link to="/platform" className='text-link text-nav'>Platform</Link> </Nav.Link>
                  <Nav.Link><Link to="/cases" className='text-link text-nav'>Use Cases</Link></Nav.Link>
                  <Nav.Link ><Link to="/pricing" className='text-link text-nav'>Pricing</Link></Nav.Link>
                  <Nav.Link ><Link to="/blog" className='text-link text-nav'>Blog</Link></Nav.Link>
                  <Nav.Link ><Link to="/login" className='text-link text-nav'>Log In</Link></Nav.Link>
                  <Button className='btn-nav left-space'>Get Started Now</Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/platform">
          <Platform />
        </Route>
        <Route exact path="/cases">

        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/blog">

        </Route>
        <Route exact path="/login">

        </Route>

        {/* <Home /> */}
      </Router>
    </>
  );
}

export default App;
