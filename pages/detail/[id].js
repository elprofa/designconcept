import Styled from 'styled-components';
import {Col,Row} from 'reactstrap'
import Image from 'next/image'
import { useState } from 'react';
import { useEffect } from 'react';

const SectionDetailStc=Styled.section`
 
     min-height:100vh;
    background:#fff !important;
    .imagaAppercu div {
        width: 90%;
        height: 411px;
        margin: auto !important;
        display: block !important;
        position: relative !important;
        @media (max-width: 476px)         
          {
            height: 280px;
          }
    }
    .imagaAppercu1 div {
        width: 80% !important;
        height: 100px;
        margin: auto !important;
        cursor:pointer;
        @media (max-width: 476px)         
          {
            display:none !important;
          }
    }
`;
export default function Detail() {
    const lien="/img/ecouteur.png"
  return (
    <SectionDetailStc className="sectionDetail" style={{padding:"80px"}}>
        <Row>
            <Col lg={6}>
                <div className="imagaAppercu">
                    <Image src={lien} layout="fill" />
                </div>
            <br/>
            <br/>
            <Row>
                <Col md={3}>
                    <div className="imagaAppercu1">
                        <Image src={lien} layout="fill" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="imagaAppercu1">
                        <Image src={lien} layout="fill" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="imagaAppercu1">
                        <Image src={lien} layout="fill" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="imagaAppercu1">
                        <Image src={lien} layout="fill" />
                    </div>
                </Col>
            </Row>
        </Col>
        <Col lg={6}>
            <h2 style={{fontSize: "25px"}}>Produit 1</h2>
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
    </SectionDetailStc>
  )
}