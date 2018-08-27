import React, { Component } from 'react';
import { Jumbotron, Button, Col, Row, Container, ListGroup, ListGroupItem } from "reactstrap";
import Link from "react-router-dom";
import API from "../../utils/API";

class Users extends Component {
    state = {
        users: [],
        name: "",
        description: "",

    };

    componentDidMount() {
        this.loadUsers();
    };

    loadUsers = () => {
        API.getUsers()
        .then(res =>
            this.setState({
                users: res.data, name:'', description: ""
            }))
            .catch(err => console.log(err))
    }; //loadUsers

    deleteUsers = () => {
        API.deleteUsers(id)
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }; //deleteUsers
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };//handleInputChange

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.name && this.state.description) {
            API.saveUsers({
                name: this.state.name,
                description: this.state.description,
            })
            .then(res => this.loadUsers())
            .catch(err => console.log(err));
        }
    }; //handleFormSubmit
    
}//Users

render() {
    return (
        <Container>
            <Row>
                <Col size='md-6'>
                    <Jumbotron>
                        <h1>Input some Info about Yourself!</h1>
                    </Jumbotron>
                </Col> 
            </Row>
        </Container>
    )
} //render