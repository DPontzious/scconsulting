import React, { Component } from 'react';
import { Row, Container, Col } from 'reactstrap';
import './style.css';

class Service extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h3> Services</h3>
                    <Row>
                        <Col>
                            <h6>Sound Compliance is a full-service consulting firm which focuses in the following areas</h6>
                            <ul>
                                <li>Compliance program design, implementation and testing / administration</li>
                                <li>Customized Policies and Procedures</li>
                                <li>Training and educational programs</li>
                                <li>Disclosure document preparation and revision (the New Part 2 of Form ADV)</li>
                                <li>Code of Ethics development and monitoring</li>
                                <li>Independent CCO:</li>
                                <ul className='ulB'>
                                    <li>Annual review of Compliance Programs</li>
                                    <li>Outsourced” CCO</li>
                                </ul>
                            </ul>


                        </Col>
                        <Col>
                            <h6>Registered Investment Advisers and Advisers to Hedge Funds / Private Equity</h6>
                            <ul>
                                <li>Compliance Program Design / Implementation</li>
                                <li>Policies, Procedures and Internal Controls </li>
                                <li>IARD Registrations / Filings / Administration</li>
                                <li>Administration and Filing of 13F, 13D and 13G</li>
                                <li>Form ADV Parts 1 and II (Disclosure Document)</li>
                                <li>Training & Education</li>
                                <li>Risk Assessment</li>
                                <li>Contract Review and Assessment</li>
                                <li>SEC or State Examination Administration</li>
                                <li>Privacy / Data Security</li>
                                <li>Due Diligence of Vendors or Sub-Advisors</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row></Row>
                    <Row>
                        <Col>
                            <h6>Broker Dealers</h6>
                            <ul>
                                <li>CRD Registrations / Filings / Administration</li>
                                <li>Written Supervisory Procedures and Compliance (3010, 3012, 3013)</li>
                                <li>Form BD Filing / Maintenance</li>
                                <li>Privacy / Data Security</li>
                                <li>Due Diligence of Vendors / Third Party Providers</li>
                                <li>Independent AML Reviews</li>
                                <li>Training & Education</li>
                                <li>Risk Assessment</li>
                            </ul>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div >
        )
    }
}
export default Service;