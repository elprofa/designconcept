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
                  {/* <StaticImage className= 'img' id= 'img'
                    src="../../images/logo.png"
                    height={80}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="A Gatsby astronaut"
                    style={{ marginBottom: `1.45rem`,
                            cursor: `pointer` }}
                  /> */}
                  </NavbarBrand>
                  <NavbarToggler onClick={toggle} />
                  <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          Options
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>
                            Option 1
                          </DropdownItem>
                          <DropdownItem>
                            Option 2
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            Reset
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                    <NavbarText className='mx-1'>Acceuil</NavbarText><br/>
                    <NavbarText className='mx-1'>Catalogue</NavbarText><br/>
                    <NavbarText className='mx-1'>Contact</NavbarText>
                  </Collapse>
                </Navbar>
                </nav>
            </Container>
          </section>
          <section className="sectionHeader1">
              <Container>
          
                <Row className="afterHeader">
                  <Col lg={12}>
                    <h1>D<span >esign</span>et<span>ko</span>ncept</h1>
                  </Col>
                </Row>
              </Container>
          </section>
        </NavBarStc>
      );
    }
    
    export default NavBar;
