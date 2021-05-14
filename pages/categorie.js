import Head from 'next/head'
import Image from 'next/image'
import { Col, Row, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container } from 'reactstrap'
import styled from 'styled-components'
import Link from 'next/link'
import { AiOutlineHome,AiOutlineBulb,AiOutlineClear,AiOutlineLaptop} from "react-icons/ai";

const ContainerStyle = styled(Container)`

    .ranger-un {
        display: flex;
    }

    .ranger-unArticle {
    width: 80%;
    height: auto;

    }
`;

 const Contner = styled.div`



`;


export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>design & koncept</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Container className=''>
      <ContainerStyle>
          <Row className='ranger-un column'>
            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Prix en €</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Description article.</CardText>
                <Button color="primary" size="sm" block> Button</Button>
                </CardBody>
                </Card>
            </Col>

                
            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Prix en €</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Description article.</CardText>
                <Button color="primary" size="sm" block> Button</Button>
                </CardBody>
                </Card>
            </Col>

            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Prix en €</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Description article.</CardText>
                <Button color="primary" size="sm" block> Button</Button>
                </CardBody>
                </Card>
            </Col>
                
            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Prix en €</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Description article.</CardText>
                <Button color="primary" size="sm" block> Button</Button>
                </CardBody>
                </Card>
            </Col>
        </Row>

        <Row className='ranger-un column'>
            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Prix en €</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Description article.</CardText>
                <Button color="primary" size="sm" block> Button</Button>
                </CardBody>
                </Card>
            </Col>

            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Prix en €</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Description article.</CardText>
                <Button color="primary" size="sm" block> Button</Button>
                </CardBody>
                </Card>
            </Col>

            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Prix en €</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Description article.</CardText>
                <Button color="primary" size="sm" block> Button</Button>
                </CardBody>
                </Card>
            </Col>
                
            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Prix en €</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Description article.</CardText>
                <Button color="primary" size="sm" block> Button</Button>
                </CardBody>
                </Card>
            </Col>
        </Row>
      </ContainerStyle>
      </Container>

    </div>
  )
}
