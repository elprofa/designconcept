import Head from 'next/head'
import Image from 'next/image'
import {Col,Row,Container} from 'reactstrap'
import styled from 'styled-components'
import Link from 'next/link'
import { AiOutlineHome,AiOutlineBulb,AiOutlineClear,AiOutlineLaptop} from "react-icons/ai";

const ContainerStyle=styled(Container)`
    max-width:100% !important;
`;

 const Contner = styled.div`


 .ranger-un
 {
   background: #f7931e;
 }
 .ranger-un:hover
 {
   transition: .9s;
   width: 40%;
   flex: 3;
 }

 .ranger-deux
 {
   background: #42210b;
 }
 .ranger-deux:hover
 {
   transition: .9s;
   flex: 3;
 }
/* 
 .ranger-deux
 {
   background: blue;
 } */
 .ranger-deux:hover
 {
   transition: .9s;
   flex: 3;
 }

 .ranger-trois
 {
   background: #c1272d;
 }
 .ranger-trois:hover
 {
   transition: .9s;
   flex: 3;
 }

 .ranger-quatre
 {
   background: #f15a24;
 }
 .ranger-quatre:hover
 {
   transition: .9s;
   flex: 3;
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

.column:hover 
{
  .appercu
    {
      display:block;
      .productImage div {
          height: 354px;
          width: 454px;
          margin: 30px auto !important;
          @media (max-width: 476px)         
          {
            height: 40%!important;
            width: 100%!important;
          }
      }
      
    }
    span 
    {
      color:#000;
      font-size:30px;
      margin: auto;
      position: relative;
      top: 0px;
      left: 45%;
      transform: translate(-50%, -50%);
      border: 1px solid #000;
      padding: 10px;
      cursor: pointer;
      
    }

    .divButton {
      position: relative;
      margin-top: 60% !important;
      text-align: center;
      border: 20px solid #fff;
      width: 150px;
      margin: auto;
      height: 120px;
      padding-top: 0px;
      @media (max-width: 476px)         
      {
        margin-top: 110% !important;
      }
      a {
        color: #fff;
        font-family: inherit;
        font-weight: 900;
        font-size: 20px;
    }
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
    border: 30px solid #fff;
    width: 215px;
    margin: auto;
    height: 190px;
    padding-top: 20px;
    a {
      color: #fff;
      font-family: inherit;
      font-weight: 900;
      font-size: 30px;
  }
}
`;


export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>dubani agency</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Contner className='contner'>
        <ContainerStyle>
          <Row >
            <Col  className='ranger-un column'>
              <div className="appercu">
                <div className="productImage">
                  <Image src="/img/maison.png" layout="fill" />
                </div>
                
              </div>
              <div className="divButton">
                  <Link href="/detail/1">
                    <a>
                      <AiOutlineHome /> <br/>
                      HOME
                    </a>
                  </Link>
                </div>
            </Col>

            <Col className='ranger-deux column'>
              <div className="appercu">
                <div className="productImage">
                  <Image src="/img/lamp.png" layout="fill" />
                </div>
              </div>
              <div className="divButton">
                  <Link href="/detail/2">
                    <a>
                    <AiOutlineBulb /> <br/>
                      LAMPE
                    </a>
                  </Link>
                </div>
            </Col>    

          <Col className='ranger-trois column' >
            <div className="appercu">
                <div className="productImage">
                  <Image src="/img/pele.png" layout="fill" />
                </div>
              </div>
              <div className="divButton">
                  <Link href="/detail/3">
                    <a>
                      <AiOutlineClear /> <br/>
                      MENAGE
                    </a>
                  </Link>
                </div>
          </Col>

          <Col className='ranger-quatre column'>
            <div className="appercu">
              <div className="productImage">
                <Image src="/img/cle.png" layout="fill" />
              </div>
            </div>
            <div className="divButton">
              <Link href="/detail/4">
                <a>
                  <AiOutlineLaptop /> <br/>
                  GADGET
                </a>
              </Link>
            </div>
          </Col>
      </Row>
      </ContainerStyle>
      </Contner>

    </div>
  )
}
