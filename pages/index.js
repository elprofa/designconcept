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
   .divButton 
   {
    background-image:url("/img/home1.png");
    background-size:100% 100%;
   }
 }

 .ranger-2
 {
   background: #f7931e;
   .divButton 
   {
    background-image:url("/img/lamp1.png");
    background-size:100% 100%;
   }
 }

 .ranger-3
 {
   background: #c1272d;
   .divButton 
   {
    background-image:url("/img/electro1.png");
    background-size:100% 100%;
   }
 }

 .ranger-4
 {
   background: #f15a24;
   .divButton 
   {
    background-image:url("/img/gadget1.png");
    background-size:100% 100%;
   }
 }
 
 .column {
   padding-bottom: 40px;
    @media (max-width: 963px)         
    {
      display: block !important;
      flex: none !important;
    }
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

.divButton:hover{
  @media (min-width: 963px)         
    {
      transform: rotate(45deg);
    }
  
}

.divButton {
  
  position: relative;
    @media (min-width: 964px)         
    {
      transition: transform .7s ease-in-out;
    }
    
    text-align: center;
    width: 170px;
    height: 170px;
    padding-top: 20px;
    margin: 30vh auto !important;
    cursor:pointer;
    color: #fff;
      font-family: system-ui;
      font-weight: 500;
      font-size: 25px;
    
}

.caption,.caption1
{
  display:none;
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
.mystyle
{
  background:#fff !important;
  flex:3;
  .appercu
    {
      display:block;
      img{
            transition-delay: 2s;
            visibility: inherit;
            position: relative !important;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            margin-top: 40px !important;
            width: auto;
            max-height: 300px;
            max-width: 100%;
            margin: auto;
            display: block;
            
          }
    }

  .divButton
  {
    box-shadow:0px 6px 6px #ccc;
    width: 100px;
    height: 100px;
    /* border: 20px solid #fff; */
    padding: 0;
    font-size: 12px;
    padding-top: 10px;
    margin: 10% auto !important;
    
  }
  .caption1
  {
    display:block;
    position: absolute;
    z-index: 9;
    width: 100px;
    background: #46230b;
    color: #fff;
    top: 20px;
    right: 20px;
    height: 100px;
    overflow: hidden;
    border-radius: 50% 0;
    h1
    {
      text-align: center;
      font-size: 28px;
      font-weight: 600;
      font-family: system-ui;
    }
    p{
      text-align: center;
      margin: 15px;
      font-style: italic;
      margin-bottom: 0px;
      font-weight: 100;
    }
  }
  .caption 
  {
    transition:3s;
    display:block;
    opacity:1;
    z-index: 9;
    position: relative;
    margin-bottom: 20px;
    width: 50%;
    background: transparent !important;
    color: #46230b;
    padding: 0px;
    border-radius: 100px 0px;
    margin: 25px;
    left: 0px;
    h1
    {
      font-weight: 700;
      font-family: system-ui;
    }
    p
    {
      border-bottom: 1px solid;
    }
  }
 
}
`;


export default function Home() {

  const ltr=()=>{
    var caption1 = document.getElementsByClassName('captionK1')[0];
    var caption2 = document.getElementsByClassName('captionK2')[0];
    var caption3 = document.getElementsByClassName('captionK3')[0];
    var caption4 = document.getElementsByClassName('captionK4')[0];
    caption1.classList.remove("move-ltr");
    caption1.classList.toggle("move-ltr");

    caption2.classList.remove("move-ltr");
    caption2.classList.toggle("move-ltr");

    caption3.classList.remove("move-ltr");
    caption3.classList.toggle("move-ltr");

    caption4.classList.remove("move-ltr");
    caption4.classList.toggle("move-ltr");
}

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
      // console.log(e.target.classList);
      ltr();
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
              <div className="caption captionK1">
                  <h1>MEMORY FOAM</h1>
                  <p>Portable et pliable</p>
              </div>
              <div className="caption1">
                  <p>CFA </p>
                  <h1>320 k</h1>
              </div>
                <div className="productImage">
                  <Link href="/detail/1">
                    <img src="/img/canape.gif" style={{width:"75% !important"}} />
                  </Link>
                </div>
                
              </div>
              
              <div className="divButton "  id="1" onClick={clickColumn}>
              
              </div>
            </Col>

            <Col className='ranger-2 column'  id="column2">
              <div className="appercu">
              <div className="caption captionK2">
                  <h1>OFFICE LAMP</h1>
                  <p>Haute qualité & cool</p>
              </div>
              <div className="caption1">
                  <p>CFA </p>
                  <h1>50 k</h1>
              </div>
                <div className="productImage">
                <Link href="/detail/1">
                    <img src="/img/lamp.gif"  />
                  </Link>
                </div>
              </div>
              <div className="divButton" id="2" onClick={clickColumn}>
              </div>
            </Col>    

          <Col className='ranger-3 column'  id="column3">
            <div className="appercu">
            <div className="caption captionK3">
                  <h1>MIXER AMERICAIN</h1>
                  <p>Puissant et endurant </p>
              </div>
              <div className="caption1">
                  <p>CFA </p>
                  <h1>120 k</h1>
              </div>
                <div className="productImage">
                <Link href="/detail/1">
                    <img src="/img/mixer.gif"  />
                </Link>
                </div>
              </div>
              <div className="divButton" id="3" onClick={clickColumn}>
              </div>
          </Col>

          <Col className='ranger-4 column'  id="column4">
            <div className="appercu">
              <div className="caption captionK4">
                    <h1>Earphone bling</h1>
                    <p>Doux et aggréable à l'oreille </p>
                </div>
                <div className="caption1">
                    <p>CFA </p>
                    <h1>44 k</h1>
                </div>
              <div className="productImage">
                <Link href="/detail/1">
                  <img src="/img/gadget_2.gif"  />
                </Link>
              </div>
            </div>
            <div className="divButton" id="4" onClick={clickColumn}>
            </div>
          </Col>
      </Row>
      </ContainerStyle>
      </Contner>

    </div>
  )
}
