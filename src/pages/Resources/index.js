import React, { Component } from 'react';
import { Row, Container, Col } from 'reactstrap';
import './style.css';


class Resources extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className='textBox' sm={{ size: 8, offset: 1 }}>
                            <h1>Resources/ Partners</h1>
                            <ul>
                                <li>Securities & Exchange Commission</li>
                                <li>FINRA</li>
                                <li>NAtional Futures Association</li>
                                <li>North American Securities Administrators Association </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Resources;