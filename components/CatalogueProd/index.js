import Head from 'next/head'
import Image from 'next/image'
import { Col, Row, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container } from 'reactstrap';
import ContainerStyle from "./catalogue.stc";





const Catalogue = (props) => {
  return (
    <div className="App">
      <Container >
      <ContainerStyle>
          <Row className='ranger-un column'>
            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" className='prix'>29,9€</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 details">Text détails article, carateristique,...</CardSubtitle>
                    <CardText className='textDetails'>Termine dans 3 jours.</CardText>
                <Button color="light btn-outline-dark" size="sm" block> Voir tous les détails article</Button>
                </CardBody>
                </Card>
            </Col>
   
            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" className='prix'>19,9€</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 details">Text détails article, carateristique,...</CardSubtitle>
                    <CardText className='textDetails'>Description article.</CardText>
                <Button color="light btn-outline-secondary" size="sm" block> Voir tous les détails article</Button>
                </CardBody>
                </Card>
            </Col>

            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" className='prix'>209,9€</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 details">Text détails article, carateristique,...</CardSubtitle>
                    <CardText className='textDetails'>Description article.</CardText>
                <Button color="secondary" size="sm" block> Voir tous les détails article</Button>
                </CardBody>
                </Card>
            </Col>
                
            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" className='prix'>9,9€</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 details">Text détails article, carateristique,...</CardSubtitle>
                    <CardText className='textDetails'>Description article.</CardText>
                <Button color="primary btn-outline-dark" size="sm" block> Voir tous les détails article</Button>
                </CardBody>
                </Card>
            </Col>
        </Row>

        <Row className='ranger-un column'>
            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" className='prix'>29,9€ - 409,48€</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 details">Text détails article, carateristique,...</CardSubtitle>
                    <CardText className='textDetails'>Description article.</CardText>
                <Button color="primary" size="sm" block> Voir tous les détails article</Button>
                </CardBody>
                </Card>
            </Col>

            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" className='prix'>29,9€ - 99,9€</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 details">Text détails article, carateristique,...</CardSubtitle>
                    <CardText className='textDetails'>Description article.</CardText>
                <Button color="dark" size="sm" block> Voir tous les détails article</Button>
                </CardBody>
                </Card>
            </Col>

            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" className='prix'>29,9€ - 109,9€</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 details">Text détails article, carateristique,...</CardSubtitle>
                    <CardText className='textDetails'>Description article.</CardText>
                <Button color="secondary" size="sm" block> Voir tous les détails article</Button>
                </CardBody>
                </Card>
            </Col>
                
            <Col className='ranger-unArticle'>
                <Card>
                    <CardImg top width="100%" src="/img/maison.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" className='prix'>29,9€ - 209,9€</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 details">Text détails article, carateristique,...</CardSubtitle>
                    <CardText className='textDetails'>Description article.</CardText>
                <Button color="light" size="sm" block> Voir tous les détails article</Button>
                </CardBody>
                </Card>
            </Col>
        </Row>
      </ContainerStyle>
      </Container>

    </div>
  )
}

export default Catalogue;
