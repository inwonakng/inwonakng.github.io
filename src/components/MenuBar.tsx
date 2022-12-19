import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RouteType } from '../routes';
import shinChanGif from '../shinchan.gif'
import shinChanStatic from '../shinchan.png'

type MenuBarProps = {
    routes: RouteType[];
}

const Logo = () => {
    const [isHover,setHover] = useState(false)

    
    return(
        <img 
            src={isHover ? shinChanGif : shinChanStatic} 
            style={{height:'5vh'}}
            onMouseEnter={() => setHover(!isHover)}
            onMouseLeave={() => setHover(!isHover)}
        />
    )
}



const MenuBar = ({routes}:MenuBarProps) => {
    return(
    <div className='menubar'>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#/home"><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    {
                        routes.map((prop,key) => 
                        <Nav.Link href={'#'+prop.path} key={key}>{prop.name}</Nav.Link>
                        )
                    }
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                        Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                        Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    </div>
    )

}


export default MenuBar;