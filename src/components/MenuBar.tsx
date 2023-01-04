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
        className="logo"
        src={isHover ? shinChanGif : shinChanStatic} 
        // style={{height:'100%'}}
        onMouseEnter={() => setHover(!isHover)}
        onMouseLeave={() => setHover(!isHover)}
    />
    )
}



const MenuBar = ({routes}:MenuBarProps) => {
    return(
    // <div >
        <Navbar className='menubar'>
            <Container fluid>
            <Navbar.Brand><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"
                    style={{right:'none'}}
                >
                    <Nav className="me-auto">
                    {
                        routes.map((prop,key) => 
                        <Nav.Link href={'#'+prop.path} key={key} style={{fontSize:'20px'}}>{prop.name}</Nav.Link>
                        )
                    }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    // </div>
    )
}


export default MenuBar;