import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import './style.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={{ size: 4, offset: 1 }}><h2> Contact Information</h2>
                    </Col>

                </Row>
                <Row>
                    <Col sm={{ size: 4, offset: 2 }} >
                        <Form>
                            <FormGroup>
                                <Label for="name">First Name</Label>
                                <Input type="firstName" name="firtName" id="firtName" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Last Name</Label>
                                <Input type="lastName" name="lastName" id="lastName" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">Phone Number</Label>
                                <Input type="phone" name='phone' id="phone" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleText">Text Area</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>

                            <Button>Submit</Button>
                        </Form>
                    </Col>
                    <Col sm={{ size: 4, }}>
                        <p className="info">Sound Compliance Services
                           <br /> 910 Cascade Avenue
                                      Gig Harbor
                                        WA 98335
                                     253.514.8898/417.234.1489 (cell)
                                     info@soundcomplianceservices.com
                        Linkedin Profile</p>

                    </Col>
                </Row>

            </div >


        )
    }
}
export default Contact;