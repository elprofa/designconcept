import Styled from 'styled-components';
import {Col,Row} from 'reactstrap'
import Image from 'next/image'
import { useState } from 'react';
import { useEffect } from 'react';

const SectionDetailStc=Styled.section`
 
     min-height:100vh;
    background:#fff !important;
    .caption 
  {
    transition:3s;
    display:block;
    opacity:1;
    z-index: 9;
    position: relative;
    margin-bottom: 20px;
    background: #fff;
    width: 50%;
    background: #46230b !important;
    color: #fff;
    padding: 30px;
    border-radius: 100px 0px;
    margin: 25px;
    left: 0px;
  }
  .move{
  -webkit-animation: moveall 5s;
  animation: moveall 5s;
}
.move-ltr{
   -webkit-animation: moveltr 5s;
  animation: moveltr 5s;
}
.move-ttb{
    -webkit-animation: movettb 5s;
  animation: movettb 5s;
}
@keyframes moveall {
  0%   {left: 0px; top: 0px;}
  25%  {left: 200px; top: 0px;}
  50%  {left: 200px; top: 200px;}
  75%  {left: 0px; top: 200px;}
  100% {left: 0px; top: 0px;}
}
@keyframes moveltr {
  0%   { left: 0px; top: 0px;}
  50%  {left: 200px; top: 0px;}
  100% {left: 0px; top: 0px;}
}
@keyframes movettb {
  0%   {left: 0px; top: 0px;}
  50%  {top: 200px;left: 0px;}
  100% {left: 0px; top: 0px;}
}
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
    const ltr=()=>{
       
        var caption = document.getElementsByClassName('caption');
        console.log(caption[0],caption[0].classList)
        caption[0].classList.remove("move");
        caption[0].classList.remove("move-ttb");
        caption[0].classList.toggle("move-ltr");
    }
    const lien="/img/ecouteur.png"
  return (
    <SectionDetailStc className="sectionDetail" style={{padding:"80px"}}>
        <Row>
            <Col lg={6}>
                <div className="caption">
                  <h1>MEMORY FOAM</h1>
                  <p>Portable et pliable</p>
                </div>
                <div className="imagaAppercu" onClick={ltr}> 
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