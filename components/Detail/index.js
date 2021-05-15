import React, { useState } from 'react';
import DetailStc from './Detail.stc'
import Image from "next/image"
import {Col,Row} from 'reactstrap'

const Detail=(props)=>{

    return(
    <DetailStc>
        <Col lg={6}>
                <div className="imagaAppercu">
                    <Image src={props.lien} layout="fill" />
                </div>
            <br/>
            <br/>
            <Row>
                <Col md={3}>
                    <div className="imagaAppercu1">
                        <Image src={props.lien} layout="fill" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="imagaAppercu1">
                        <Image src={props.lien} layout="fill" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="imagaAppercu1">
                        <Image src={props.lien} layout="fill" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="imagaAppercu1">
                        <Image src={props.lien} layout="fill" />
                    </div>
                </Col>
            </Row>
        </Col>
        <Col lg={6}>
            <h2 style={{fontSize: "25px"}}>{props.libelle}</h2>
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
    </DetailStc>
    )
}
export default Detail;