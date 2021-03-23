/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, Col, Input, Modal, Row } from 'antd';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonHOC, TermCondition } from '../..';
import './CreateToken.scss';


const CreateToken: React.FC = () => {
    const history = useHistory();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const plainOptions = ['Read', 'Write'];

    function onChange(checkedValues: any) {
        console.log('checked = ', checkedValues);
    }
    const generateNewKey = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        history.push('/secrets');
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div>

            <br />
            {isModalVisible ? <TermCondition handleOk={handleOk} handleCancel={handleCancel} /> : (
                <Fragment>
                    <Row >
                        <Col xs={20} sm={1} md={1} lg={1} xl={1} ></Col>
                        <Col >
                            <span className="key_head">  Key Details</span>

                        </Col>
                    </Row>
                    <br />
                    <Row align="middle">
                        <Col xs={20} sm={1} md={1} lg={1} xl={1} ></Col>
                        <Col xs={20} sm={3} md={3} lg={2} xl={2}  >
                            <span className="key_sub_headings">Key Name</span>
                        </Col>
                        <Col xs={20} sm={1} md={1} lg={1} xl={1}  ></Col>
                        <Col xs={20} sm={2} md={3} lg={3} xl={2}  >
                            <Input className="key_input" placeholder="Write name for remembering the key" />
                        </Col>
                    </Row>
                    <br />
                    <Row align="middle">
                        <Col xs={20} sm={1} md={1} lg={1} xl={1}  ></Col>
                        <Col xs={20} sm={3} md={3} lg={2} xl={2}  >
                            <span className="key_sub_headings"> User Name</span>
                        </Col>
                        <Col xs={20} sm={1} md={1} lg={1} xl={1}  ></Col>

                        <Col xs={20} sm={2} md={3} lg={3} xl={2}  >
                            <Input className="key_input" placeholder="Write Name of User creating Key" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={20} sm={1} md={1} lg={1} xl={1} ></Col>
                        <Col xs={20} sm={4} md={4} lg={3} xl={3}  >
                            <span className="key_sub_headings">Permission</span>
                        </Col>
                        <Col xs={20} sm={8} md={7} lg={5} xl={4}  >
                            <Checkbox.Group options={plainOptions} defaultValue={['Read']} onChange={onChange} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={20} sm={1} md={1} lg={1} xl={1}  ></Col>
                        <Col xs={20} sm={2} md={5} lg={1} xl={1}>
                            <ButtonHOC
                                ClickHandler={generateNewKey}
                                className='generate_key'><span className="genrated-btn">Generate API Key</span></ButtonHOC>
                        </Col>
                    </Row>
                </Fragment>
            )}

        </div>
    );
};

export default CreateToken;
