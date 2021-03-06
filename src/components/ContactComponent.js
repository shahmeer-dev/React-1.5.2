import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Button, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contact: 'Tel.',
            message: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row" className="mt-3">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label htmlFor="firstname" >First Name</Label>
                                </Col>
                                <Col md={10}>
                                    <Input type="text" name="firstname" id="firstname" placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}

                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label htmlFor="lastname" >Last Name</Label>
                                </Col>
                                <Col md={10}>
                                    <Input type="text" name="lastname" id="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}

                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label htmlFor="telnum" >Contact Tel.</Label>
                                </Col>
                                <Col md={10}>
                                    <Input type="tel" name="telnum" id="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange}

                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label htmlFor="email" >Email</Label>
                                </Col>
                                <Col md={10}>
                                    <Input type="email" name="email" id="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}

                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label htmlFor="agree" >
                                            <Input type="checkbox" name="agree" value={this.state.agree} /><strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <FormGroup>
                                        <Input type="select" name="contactType"
                                            value={this.state.option}
                                            onChange={this.handleInputChange}
                                        >
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}

                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                        </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;