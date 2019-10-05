import React, { Component } from 'react';
import { Row, Container, Col } from 'reactstrap';
import './style.css';

class Main extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='test'>
                        <Col sm={{ size: 8, offset: 1 }} className='hello'>

                            At Sound Compliance Services, we develop deep relationships with our clients to provide solutions and expertise that make sense for the uniqueness of your business.  In essence, we become your compliance and regulatory business partner. With Sound Compliance on your team, you have the support necessary to develop and maintain your compliance and operational programs within regulatory expectations balanced with business needs.
                            <br></br>
                            <br></br>
                            <p>
                                Everyone knows the challenge of a start up.  Many tasks and projects, not enough staff or time. I was looking for a solution, someone who could provide me continual support which would allow me as CEO and CCO to move forward on what mattered most-building the business AND meeting our obligations.  We found that solution with Sound Compliance Services. We use the “Independent CCO Service” which provides me with the knowledge and expertise to meet our compliance and regulatory obligations.  What surprised us most was the versatility of Sound Compliance; guidance on business decisions and their impact to us (more than just “compliance.”)
                               Eric Brown, CEO and CCO Radiant Asset Management
                            </p>

                        </Col>
                    </Row>

                </Container >

            </div >
        )

    }
}

export default Main;
