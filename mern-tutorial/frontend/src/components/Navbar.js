import {Button, Container, Navbar, Modal} from 'react-bootstrap'

function NavbarComponent() {

    return(
        <Navbar expand ="sm"> 
            <Navbar.Brand href="/"> Ecommerce</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button> 0 Cart items </Button>
            </Navbar.Collapse>
        </Navbar>    
        
    )


}

export default NavbarComponent;