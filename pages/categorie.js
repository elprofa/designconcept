import Head from 'next/head'
import Image from 'next/image'
import { Col, Row, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container } from 'reactstrap'
import ContainerStyle from '../components/CatalogueProd/catalogue.stc';
import Catalogue from "../components/CatalogueProd";



export default function catalogue() {
  return (
    <div className="App">
      <Head>
        <title>design & koncept</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Container>
        <ContainerStyle>
          <Catalogue/>
        </ContainerStyle>
      </Container>

    </div>
  )
}
