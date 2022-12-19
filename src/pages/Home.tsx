import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import headshot from '../hawaii.jpg'
import { useState } from 'react'

const Home = () => {

    const [width, setWidth] = useState<number>(window.innerWidth);

    return(
    <>
        <Row>
        {
            width < 1000 ? null
            :<Col xs={3}>
                <img src={headshot} style={{width:'100%'}}/>
            </Col>
        }
            <Col xs={width < 1000 ? 12: 9}>
            {
                width < 1000
                ?<Row className='mb-3'>
                    <img src={headshot} style={{width:'100%'}}/>
                </Row>: null
            }
                <Row>
                    <h3>Inwon Kang</h3> 
                    <p>
                    Email: <a href="mailto:inwon.kang04@gmail.com" target="_blank" rel="noreferrer">inwon.kang04@gmail.com</a>
                    </p>
                </Row>
                <Row>
                    <Col>
                    I am a current PhD student at Rensselaer Polytechnic Institute.
                    I work mostly with Python for data/analysis oriented projects. I am also familiar with web frameworks in javascript and python for buliding quick web pages.
                    <br/>
                    <br/>
                    During my undergraduate and master's program, I focused on explaininable machine learning using shallow models. 
                    My master's project was on collecting survey data from participants and building explainable ML models to try to explain the results. 
                    During this time, I also dabbled in NLP and built an enhanced pipeline of existing state-of-art model for <em>Preference Ellicitation</em> task using GNNs and coreference parsers.
                    <br/>
                    <br/>
                    My PhD focus will be on blockchains and integration of machine learning with blockchains.
                    {/* <br/>
                    <br/>
                    I like collecting datasets, one day one of them will be useful. */}
                    </Col>
                    <Col xs={12} className='mt-5'>
                        <h5>Education</h5>
                    </Col>
                    <Col xs={12}>
                        <ul>
                            <li>
                                BS in Computer Science with concentration in AI/ML (Aug 2017 - May 2021). <b>RPI</b>
                            </li>
                            <li>
                                MS in Computer Science (Aug 2021 - May 2022). Supervised by Prof. <a href="https://www.cs.rpi.edu/~xial/" target="_blank" rel="noreferrer">Lirong Xia</a> <b>RPI</b>
                            </li>
                            <li>
                                PhD in Computer Science (Aug 2022 - ). Supervised by Prof. <a href="https://faculty.rpi.edu/oshani-seneviratne" target="_blank" rel="noreferrer">Oshani Seneviratne</a> <b>RPI</b>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
    )
}

export default Home