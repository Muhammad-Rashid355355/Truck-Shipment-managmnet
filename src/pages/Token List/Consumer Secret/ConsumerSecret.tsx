/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Input, Row } from 'antd';
import React, { useRef, useState } from 'react';
import './ConsumerSecrets.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ButtonHOC from '../../Buttons/ButtonHOC';


interface ConsumerSecrets {
    consumerKey: string,
    consumerSecret: string
}


const ConsumerSecret: React.FC = () => {
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    const [consumerSecrets, setConsumerSecrets] = useState<ConsumerSecrets>({
        consumerKey: 'ck_5f6efab1d4ca433da656b91e19a253875449e6f7',
        consumerSecret: 'ck_5f6efab1d4ca433da656b91e19a253875449e6f4'
    });

    return (

              <div >
              
              <Row justify="center" align="middle">
              <Col >
                    {/* <Row justify='start'> */}
                        <Row>
                        <h1 className="GeorgDownload-secrets">
                            GeorgDownload
                         </h1>

                    </Row>
                    <Row >
                        <Col >
                            <div className="label-jwt-auth-div-secrets">
                             <span className="label-jwt-auth-text-secrets">Jwt Credentials</span>
                            </div>
                        </Col>
                    </Row>
                    <hr className="hr-tag"/>
                    <Row >
                        <Col>
                            <h1 className="App-Credentials">App Credentials</h1>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <h1 className="Api-Key-secrets">Api Key</h1>
                        </Col>                       
                    </Row>
                    <Row>
                        <Col>
                        <div style={{display:'flex'}}>
                        <Input  className='Api-Key-input' placeholder="Api Key" type="text"/>                           
                        <Button className="Copy_Api_key_btn">Copy</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                        <h1 className="Api-secrets">Api Secrets</h1>                          
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div style={{display:'flex'}}>
                          
                            <Input  className='Api-secrets-input' placeholder="Api Secrets" type="password" />
                             <Button className="Copy_Api_secrets_btn">Copy</Button>

                             <Button className="regenrated_btn">Regenrate</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row  >
                    <div className="Jwt-counter-expire-div">
                        <span  className="Jwt-Token-expire-text">JWT Token wxpire every 60 minutes. You need to use the API secret to request new<br />
                                                           credentials as per the documentation here: Link 1</span>
                     </div>
                    </Row>
                    <Row >
                        <div className="token-expire-time">
                        <span className="token-expire-time-text">Your token will be expire at</span>
                        </div>
                    </Row>
                    <Row >
                        <Col>
                        <h1 className="JWT-Token">JWT Token</h1>                          
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div style={{display:'flex'}}>
                        <input className="JWT-token-input" readOnly/>
                         <button  className="Jwt-token-copy-btn">
                             <span className="Jwt-token-copy-btn-text">Copy</span></button>

                             </div>
                             </Col>
                    </Row>

               
                </Col>
            </Row>




              </div>












        // <div>
        //     <br />
        //     {/* key Details Heading */}
        //     <Row>
        //         <Col xl={1}></Col>
        //         <Col xl={3}>
        //             <span className='key_details'>key Details</span>
        //         </Col>
        //     </Row>
        //     <br />
        //     {/* Consumer Key */}
        //     <Row align="middle">
        //         <Col xl={1}></Col>
        //         <Col xl={4}>
        //             <span className='consumer_key'>Consumer Key</span>
        //         </Col>
        //         <Col>
        //             <span className='key'>{consumerSecrets.consumerKey}</span>
        //         </Col>
        //         <Col xl={1}></Col>
        //         <Col>
        //             <CopyToClipboard text={consumerSecrets.consumerKey}
        //             // onCopy={() => setState({ copied: true })}
        //             >
        //                 <ButtonHOC className='copy'>COPY</ButtonHOC>
        //             </CopyToClipboard>

        //         </Col>
        //     </Row>

        //     {/* Consumer secrets */}
        //     <br />
        //     <Row align="middle">
        //         <Col xl={1}></Col>
        //         <Col xl={4}>
        //             <span className='consumer_secrets'>Consumer Secrets</span>
        //         </Col>
        //         <Col>
        //             <span className="key">{consumerSecrets.consumerSecret}</span>
        //         </Col>
        //         <Col xl={1}></Col>
        //         <Col>
        //             <CopyToClipboard text={consumerSecrets.consumerSecret}
        //             >
        //                 <ButtonHOC className='copy'>COPY</ButtonHOC>
        //             </CopyToClipboard>
        //         </Col>
        //     </Row>
        // </div>
    );
};

export default ConsumerSecret;
