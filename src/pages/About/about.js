import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './style.css';

class About extends Component {
    render() {
        return (
            <Row className='test'>
                <Col sm={{ size: 6, offset: 1 }}>
                    <h1 className='header'>ABOUT US</h1>
                    Peter Mafteiu is the Principal of Sound Compliance Services and provides Compliance and Operation Consulting Services to registered investment advisers, broker dealers, hedge funds and mutual funds since 2009. With 25+ years in financial services, Peter has a broad perspective of compliance, operational and business needs for registered entities.
                    <p>
                        Peter started his financial career as a registered representative, branch manager / supervisor and compliance officer with regional broker dealers in Sarasota, Florida (held the NASD Series 4, 7, 24 and 63 examinations). Peter also provided insurance services to clients as a life, health and disability registered agent / broker from 1982 through 1990.
                    </p>
                    <p>
                        Peter’s consulting career began with National Regulatory Services (NRS) in Lakeville, CT in 1990 and he led the Investment Adviser Services group until his departure in 2002.  Significant achievements include: Senior management person / led the team that consistently demonstrated revenue growth of 35% per year; developed (and enhanced) all Investment Adviser products and services and developed industry standard training programs (Basic Training) and the industry’s first compliance toolkit for compliance. Peter has registered in excess of 350 investment advisers, conducted in excess of 250 mock SEC examinations and has personally trained in excess of 3,000 industry professionals through NRS’ conferences and training programs. Peter also provided services as a Special Review Person under SEC Enforcement Actions and as a Trainer of SEC and NASAA Examiners.
                    </p>
                    <p>
                        In 2002 Peter joined one of his consulting clients (BKD Wealth Advisers) as the CCO and COO. In 2002 BKD Wealth Advisers (Springfield, MO) was a $340 million AUM adviser.  With a team of 4, Peter lead the Compliance and Operational functions without headcount increase while clients and portfolios tripled and assets increased to $1 billion AUM at his departure in 2005. The growth was absorbed due to a focus on training, the design and implementation of standardized practices, process, tools and operational efficiencies.
                    </p>
                    <p>
                        From 2005 to 2006 Peter provided Consulting Services through Mafteiu Consulting Services. Establishing both domestic and foreign Clients, Peter provided initial registration services, disclosure documents, compliance program design, implementation and monitoring, and customized training solutions.  In addition, Peter (in collaboration with independent consultants) acted as a special review person under State of New York and SEC enforcement actions.
                    </p>

                    <p>
                        From 2006 to 2009, Peter served as the Chief Compliance Officer, (Investment Management & Research) for Russell Investments, Tacoma, WA. In this role, Peter was charged with the design, implementation and administration of a global compliance program (covering 275 individuals in 5 countries and 7 offices). This position required the collaboration of various regional, registered legal entities, an understanding of regional laws, rules and requirements and blending those into a standardized business and compliance process where one did not exist previously. Peter also served as the “investment management” CCO to the adviser to the US Mutual Funds of Russell.
                    </p>
                    <p>
                        Memberships
                        The National Society of Compliance Professionals
                        The Association of Certified Fraud Examiners
                        Seattle Alternative Investment Association
                    </p>

                </Col>
            </Row>
        )
    }
}

export default About; 