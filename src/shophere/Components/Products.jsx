import React from "react";
import Axios from "axios";
import {Card, Button, Container, Row, Col} from "react-bootstrap"

class Products extends React.Component{
    state;
    constructor(props){
        super(props);
        this.state= {
            products:[]
        }
    }

    componentDidMount(){
        Axios.get('https://sathishmadesh.github.io/Products/products.json')
        .then((response)=>{
            let product_list = response.data
            this.setState({products:product_list})
        })
        .catch()
    }

    render (){
        return <div>
            <pre>{JSON.stringify(this.state.products)}</pre>
            <div>
            {
                this.state.products.map((data)=>{
                    return <div>{data.id}</div>
                })
            }
            </div>
            <Container>
                <Row>
                    <Col xs={6} md={3} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/crocs_1" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={3} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/crocs_1" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={3} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/crocs_1" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={3} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/crocs_1" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={3} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/crocs_1" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default Products