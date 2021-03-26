import React, { useState } from 'react';
import { AntDesignOutlined, CheckCircleFilled } from '@ant-design/icons';
import { Row, Col, Button, Select, Radio, Tabs, Input } from 'antd';

import './GeorgDownload.scss';
import { Link } from 'react-router-dom';


const { TabPane } = Tabs;

const GeorgDownload = () => {
    const [mode, setMode] = useState<any>('left');

    const { Option }: any = Select;

    const children: any = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (

        <div>


            <Row justify="center" align="middle">
                <Col span={6}>
                    <Tabs defaultActiveKey="0" tabPosition={mode} style={{ height: 220 }} >
                        {[...Array.from({ length: 3 }, (v, i) => i)].map(i => (
                        <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
                                
                            </TabPane>
                           
                        ))};
            </Tabs>
                </Col>
                <Col span={18} >
                    <Row align="middle">
                        <h1 className="GeorgDownload">
                            GeorgDownload
               </h1>
                    </Row>
                    <Row >
                        <Col >
                            <div style={{ display: 'flex' }}>
                                <div className="label-jwt-auth-div"><span className="label-jwt-auth-text"> JWT Authentication</span></div>
                                <Link to='/ActivatedApp'>
                                <Button className="view-credential-btn">View App Credentials</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    {/* <hr className="hr-tag" /> */}
                    <Row >
                        <Col>
                            <h1 className="Basic-info">Basic information</h1>

                        </Col>

                    </Row>
                    <Row >
                        <Col  >
                            <div style={{ display: 'flex' }}>
                                <span className="App-Name">App Name</span>
                                <span className="App-Name-counting">14/50</span>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {/* <input ></input> */}
                                <Input className='basic-info-input' placeholder="App Name" />
                            </div>
                        </Col>
                        <Col >
                            <div style={{ display: 'flex' }}>
                                <span className="short-desc">Short Description</span>

                            </div>
                            <div style={{ display: 'flex' }}>
                                <Input className='short-desc-input' placeholder="Short description" />
                                {/* <input ></input> */}
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                        </Col>
                    </Row> */}
                    <Row >
                        <Col>
                            <div style={{ display: 'flex' }}>
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