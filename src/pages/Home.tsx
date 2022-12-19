import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import headshot from '../hawaii.jpg'

const Home = () => 

<>
    <Row>
        <Col xs={3}>
            <img src={headshot} style={{width:'100%'}}/>
        </Col>
        <Col xs={9}>
            <Row>
                <h3>Inwon Kang</h3>
            </Row>
            <Row>
                <Col>
                I am a current PhD student at Rensselaer Polytechnic Institute.
                I work mostly with Python for data/analysis oriented projects. I am also familiar with React.js and bootstrap for building quick web pages.
                <br/>
                <br/>
                During my undergraduate and master's program, I focused on explaininable machine learning using shallow models. 
                My master's project was on collecting survey data from participants and building explainable ML models to try to explain the results. 
                During this time, I also dabbled in NLP and built an enhanced pipeline of existing state-of-art model for <em>Preference Ellicitation</em> task using GNNs and coreference parsers.
                <br/>
                <br/>
                My PhD focus is on blockchains and integration of machine learning with blockchains.
                <br/>
                <br/>
                I like collecting datasets, one day one of them will be useful.
                </Col>
            </Row>
        </Col>
    </Row>
    <Row className='mt-3'>
        <Col xs={12}>
        <h5>Education</h5>
        </Col>
        <Col xs={12}>
            <ul>
                <li>
                    BS in Computer Science with concentration in AI/ML (Aug 2017 - May 2021). <b>RPI</b>
                </li>
                <li>
                    MS in Computer Science (Aug 2021 - May 2022). Supervised by Prof. <a href="https://www.cs.rpi.edu/~xial/" target="_blank">Lirong Xia</a> <b>RPI</b>
                </li>
                <li>
                    PhD in Computer Science (Aug 2022 - ). Supervised by Prof. <a href="https://faculty.rpi.edu/oshani-seneviratne" target="_blank">Oshani Seneviratne</a> <b>RPI</b>
                </li>
            </ul>
        </Col>
    </Row>
</>


export default Home