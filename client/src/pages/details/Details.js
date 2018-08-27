import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Jumbotron, Button } from 'reactstrap';
import API from '../../utils/API';

class Detail extends Component {
    state = {
        user: {}
    };


    componentDidMount(){
        API.getUsers(this.props.match.params.Id)
        .then(res => this.setState({ user: res.data }))
        .catch(err => console.log(err));
    }

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col size='md-12'>
                        <Jumbotron>
                            <h1>
                                {this.state.user.name}
                            </h1>    
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1>
                                Basic Description
                            </h1>
                            <p>
                                {this.state.user.description}
                            </p>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to="/">
                            <Button 
                                color="primary"
                                size="lg"
                                active
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }

}; //Detail

export default Detail;