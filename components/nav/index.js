import * as React from "react"
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Row,
    Col,
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import NavBarStc from './nav.stc';

import { button, nav} from "react-bootstrap"
import PropTypes from "prop-types"
import Link from "next/link"
import Image from 'next/image'

const NavBar = (props) => {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggle = () => setIsOpen(!isOpen);
    
      return (
        <NavBarStc>
          <section className="sectionHeader">
            <Container>
              <nav>
                <Navbar className='navbar' light expand="md">
                  <NavbarBrand href="/" style={{paddingTop:"20px"}}>
                    <Image src="/img/logo.png" width="190" height="140px" />
                  </NavbarBrand>
                  <NavbarToggler onClick={toggle} />
                  <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                      
                    </Nav>
                    <NavbarText className='mx-1'><Link href='/'><a>Acceuil</a></Link></NavbarText><br/>
                    <NavbarText className='mx-1'><Link href='/'><a>Catalogue</a></Link></NavbarText><br/>
                    <NavbarText className='mx-1'><Link href='/'><a>Contact</a></Link></NavbarText>
                  </Collapse>
                </Navbar>
                </nav>
            </Container>
          </section>
          <section className="sectionHeader1">
              <Container>
          
                <Row className="afterHeader">
                  <Col lg={12} >
                    <Image src='/img/designetkoncept.png' width="auto" height="70" />
                    {/* <h1>D<span >esign</span>et<span>ko</span>ncept</h1> */}
                  </Col>
                </Row>
              </Container>
          </section>
        </NavBarStc>
      );
    }
    
    export default NavBar;
