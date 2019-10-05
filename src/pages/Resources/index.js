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
                                <li>National Futures Association</li>
                                <li>North American Securities Administrators Association </li>
                            </ul>
                            <ul> <h1> Trade Organization</h1>
                                <li><a href="google.com">Link</a></li>
                                <li><a href="google.com">Link</a></li>
                                <li><a href="google.com">Link</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Resources;