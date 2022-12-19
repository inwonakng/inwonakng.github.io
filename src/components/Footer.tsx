import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from 'react-bootstrap/Nav';

import { FiGithub } from 'react-icons/fi'
import { GrLinkedin } from 'react-icons/gr'


const linkWithIcon = [
    {
        link:'https://www.github.com/inwonakng/',
        icon: FiGithub
    },{
        link:'https://www.linkedin.com/in/inwon-kang/',
        icon: GrLinkedin
    },

]


const Footer = () => 
<div className="footer">
    <Container fluid>
        <Nav>
        {linkWithIcon.map( item => 
            <Nav.Item className='mx-auto'>
                <Nav.Link href={item.link} target='_blank'>
                    {<item.icon/>}
                </Nav.Link>
            </Nav.Item>
        )}
        </Nav>
    </Container>
</div>

export default Footer