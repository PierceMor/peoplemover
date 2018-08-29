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
                    <form>
                        <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Full Name (required)" 
                        />
                        <TextArea
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description"
                            placeholder="Provide a Description of yourself" 
                        />
                        <Button
                             disabled={!(this.state.name && this.state.description)}
                             onClick={this.handeFormSubmit}
                        >
                            Submit Information
                        </Button>
                    </form>
                </Col>
                <Col size="md-6 sm-12" >
                    <Jumbotron>
                        <h1>Users on File</h1>
                    </Jumbotron>
                        {this.sate.users.length ? (
                            <ListGroup>
                                {this.state.users.map(user => (
                                    <ListGroupItem key={user._id} >
                                        <Link to={"/users/"}>
                                            <strong>
                                                {user.name} 
                                            </strong>
                                        </Link>
                                        <Button
                                            onclick={() => this.deleteUsers(book._id)}
                                        >
                                        </Button>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        ):(
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    )
} //render

export default Users;