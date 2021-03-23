import React from 'react';

import { Row, Col, Button,Select } from 'antd';
import './GeorgDownload.scss';

const GeorgDownload = () => {

    const { Option }:any = Select;

    const children: any = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (

        <div className="georg-div">
            <Row justify="space-around" align="middle">
                <Col  xs={24} sm={24} md={20} lg={20} xl={20} xxl={12}>
                    <Row>
                        <h1 className="GeorgDownload">
                            GeorgDownload
               </h1>
                    </Row>
                    <Row >
                        <Col >
                        <div style={{display:'flex'}}>
                            <div className="label-jwt-auth-div"><span className="label-jwt-auth-text">Label JWT Authentication:</span></div>
                            <Button className="view-credential-btn">View App Credentials</Button>
                            </div>
                        </Col>
                    </Row>
                    <hr className="hr-tag"/>
                    <Row >
                        <Col>
                            <h1 className="Basic-info">Basic information</h1>

                        </Col>

                    </Row>
                    <Row >
                        <Col  >
                        <div style={{display:'flex'}}>
                            <span className="App-Name">App Name</span>
                            <span className="App-Name-counting">14/50</span>
                            </div>
                            <div style={{display:'flex'}}>
                             <input className='basic-info-input' placeholder="App Name"></input>
                             </div>
                        </Col>
                        <Col >
                        <div style={{display:'flex'}}>
                            <span className="short-desc">Short Description</span>                           

                        </div>
                        <div style={{display:'flex'}}>
                            <input className='short-desc-input' placeholder="Short description"></input>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                        </Col>
                    </Row> */}
                    <Row >
                        <Col>
                        <div style={{display:'flex'}}>
                            <Select
                            className="selected-menu"
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                defaultValue={['a10', 'c12']}
                                onChange={handleChange}
                            >
                                {children}
                            </Select>
                            </div>
                        </Col>

                    </Row>


                </Col>
            </Row>





        </div>

    );
};
export default GeorgDownload;