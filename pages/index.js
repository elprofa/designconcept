import Head from 'next/head'
import Image from 'next/image'
import {Col,Row,Container} from 'reactstrap'
import styled from 'styled-components'
import Link from 'next/link'
import { AiOutlineHome,AiOutlineBulb,AiOutlineClear,AiOutlineLaptop} from "react-icons/ai";
import { useRef, useState } from 'react'

const ContainerStyle=styled(Container)`
    max-width:100% !important;
`;

 const Contner = styled.div`


 .ranger-1
 {
   background: #42210b;
 }

 .ranger-2
 {
   background: #f7931e;
 }

 .ranger-3
 {
   background: #c1272d;
 }

 .ranger-4
 {
   background: #f15a24;
 }
 
 .column {
    height: 100vh;
    .appercu
    {
      display:none;
    }

    span 
    {
      font-size:50px;
      font-size: 50px;
      color: #fff;
      font-weight: 700;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
    }
}

.modal-dialog
{
  width: 100% !important;
  max-width: 100%;
  top: 0;
  margin: 0;
  height: 100vh !important;
}
.divButton {
    position: relative;
    margin-top: 70% !important;
    text-align: center;
    border: 45px solid #fff;
    width: 215px;
    margin: auto;
    height: 210px;
    padding-top: 20px;
    cursor:pointer;
    color: #fff;
      font-family: system-ui;
      font-weight: 500;
      font-size: 25px;
    
}

.mystyle
{
  flex:3;
  .appercu
    {
      display:block;
      .productImage div {
        cursor:pointer;
          max-width: 80% !important;
          display: block;
          margin: 0px auto !important;
          height: 350px;
          width: auto !important;
          img{
            visibility: inherit;
            position: relative !important;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: auto;
            height: 350px important;
            min-width: 0 important;
            max-width: 100% important;
            min-height: 0 important;
            max-height: 100% important;
          }
      }
    }

  .divButton
  {
    width: 100px;
    height: 100px;
    border: 20px solid #fff;
    padding: 0;
    font-size: 12px;
    padding-top: 10px;
  }
}
`;


export default function Home() {

  const clickColumn=(e)=>{
  
    var id=e.target.id;
    console.log(id);
    var priam =document.getElementById("column"+id);
    var elements = document.getElementsByClassName('mystyle')
    
    console.log(priam)
    console.log(elements)
    
    console.log(priam.id)
    console.log(elements[0]?.id)

    if(priam.id==elements[0]?.id){

      priam.style.transition = ".9s";
      priam.classList.toggle("mystyle");
    }else
    {
        if(elements[0])
        {
          elements[0]?.classList.remove('mystyle')
          
        //  alert('yes');
        }
        else
        {
          elements[0]?.classList.remove('mystyle')
          //  alert('no')
        }
        priam.style.transition = ".9s";
        priam.classList.add('mystyle')
      }
      
    console.log(priam.classList)

      // console.log(e.target.classList);

      console.log(priam.classList)
  }

  return (
    <div className="App">
      <Head>
        <title>DesignKoncept</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Contner className='contner'>
        <ContainerStyle>
          <Row >
            <Col  className='ranger-1 column' id="column1">
              <div className="appercu">
                <div className="productImage">
                  <Link href="/detail/1">
                    <Image src="/img/f1.png" layout="fill" />
                  </Link>
                </div>
                
              </div>
              <div className="divButton" id="1" onClick={clickColumn}>
                  <AiOutlineHome /> <br/>
                      HOME
                </div>
            </Col>

            <Col className='ranger-2 column'  id="column2">
              <div className="appercu">
                <div className="productImage">
                <Link href="/detail/1">
                  <Image src="/img/lamp.png" layout="fill" />
                  </Link>
                </div>
              </div>
              <div className="divButton" id="2" onClick={clickColumn}>
                      <AiOutlineBulb /> <br/>
                      LAMPE
                </div>
            </Col>    

          <Col className='ranger-3 column'  id="column3">
            <div className="appercu">
                <div className="productImage">
                <Link href="/detail/1">
                  <Image src="/img/electro.png" layout="fill" />
                  </Link>
                </div>
              </div>
              <div className="divButton" id="3" onClick={clickColumn}>
                      <AiOutlineClear /> <br/>
                      MENAGE
                </div>
          </Col>

          <Col className='ranger-4 column'  id="column4">
            <div className="appercu">
              <div className="productImage">
              <Link href="/detail/1">
                <Image src="/img/ecouteur.png" layout="fill" />
                </Link>
              </div>
            </div>
            <div className="divButton" id="4" onClick={clickColumn}>
                  <AiOutlineLaptop /> <br/>
                  GADGET
            </div>
          </Col>
      </Row>
      </ContainerStyle>
      </Contner>

    </div>
  )
}
