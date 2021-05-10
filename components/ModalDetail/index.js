import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'
import ModalDetailStc from './ModalDetail.stc'
import Image from "next/image"
import {Col,Row} from 'reactstrap'
const ModalDetail=(props)=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
        <ModalDetailStc>
        <span onClick={handleShow}>
            {props.texte}
        </span>
        
        <Modal
            size="xl"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="wedo"
        >
         
          <Modal.Body>
            <section className="sectionDetail" style={{padding:"80px"}}>
                <Row>
                    <Col lg={6}>
                        <Image src="/img/lamp.png" layout="fill" />
                        
                        <br/><br/>
                        <Row>
                            <Col md={3}>
                            <Image src="/img/lamp.png" layout="fill" />
                            </Col>
                            <Col md={3}>
                                <Image src="/img/lamp.png" layout="fill" />
                            </Col>
                            <Col md={3}>
                            <Image src="/img/lamp.png" layout="fill" />
                            </Col>
                            <Col md={3}>
                            <Image src="/img/lamp.png" layout="fill" />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <h2 style={{fontSize: "25px"}}>LOREM IPSUMUMM LI</h2>
                        <Row style={{paddingBottom:"20px;"}}>
                            <Col sm={12} style={{padding: "15px",borderBottom: "1px solid #ccc"}}>
                               <span style={{fontWeight: "500",float: "left"}}> Prix total</span>
                               <span style={{fontWeight: "500",float: "right",color:"#ff0000"}}> 750 000 XAF</span>
                            </Col>
                            <Col sm={12} style={{padding: "15px",borderBottom: "1px solid #ccc"}}>
                                <span style={{fontWeight: "500",float: "left"}}>tVA</span>
                                <span style={{fontWeight: "500",float: "right",color:"#ff0000"}}> 750 000 XAF</span>
                            </Col>
                        </Row>
                        <br />
                        <iframe style={{width:"100%",marginTop:"20px;"}} height="341" 
                        src="https://www.youtube.com/embed/crvigoHOMSc" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                        <p>
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre 
                        provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte
                         dès qu'il est prêt ou que la mise en page est achevée. 
                        </p>
                    </Col>
                </Row>
            </section>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Retour
            </Button>
            <Button variant="primary">Plus de détail</Button>
          </Modal.Footer>
        </Modal>
      </ModalDetailStc>
    )
}
export default ModalDetail;