import React, { Fragment, useState } from 'react';
import { Collapse, List, Row, Col, Input, Checkbox } from 'antd';
import './MoreDetails.css';
import TextArea from 'antd/lib/input/TextArea';
import ButtonHOC from '../Buttons/ButtonHOC';

const { Panel } = Collapse;

const MoreDetailsComponet: React.FC = () => {

    const [rejectDetails, setRejectDetails] = useState(false);
    const [feesRejectOrder, setfeesRejectOrder] = useState(false);
    const [showFees, setshowFees] = useState(false);

    function onChange(e: { target: { checked: boolean; }; }): void {
        console.log(`checked = ${e.target.checked}`);
    }
    const summary = [
        { Text1: 'Customer', Text2: 'Public Jhon Q' },
        { Text1: 'VIN', Text2: '1GNSK123456789' },
        { Text1: 'Order ID#', Text2: '123456789' },
        {
            Text1: 'Status',
            Text2: 'Purchased',
        },
        // { Text1: 'Shipping', Text2: '' },
    ];
    const Customer = [
        { Text1: 'Type', Text2: 'Company' },
        { Text1: 'Social Security Number', Text2: '123456789-98765-651' },
        { Text1: 'EIN', Text2: '123456789' },
        { Text1: 'Name', Text2: 'Jims Auto World', },
        { Text1: 'Date of Birth', Text2: '11/09/1990' },
        { Text1: 'Address 1', Text2: '9971 Montclaire Dr' },
        { Text1: 'Address 2', Text2: '' },
        { Text1: 'ZIP', Text2: '45040' },
        { Text1: 'City', Text2: 'Mason' },
        { Text1: 'State', Text2: 'OH' },
    ];
    const Vehicle_section = [
        { Text1: 'VIN', Text2: '123456' },
        { Text1: 'Year', Text2: '2020' },
        { Text1: 'Make', Text2: 'cheverlot' },
        { Text1: 'Model', Text2: 'Suburban' },
        { Text1: 'Body', Text2: 'Sporty', },
        { Text1: 'Condition', Text2: 'Fair' },
        { Text1: 'Brands', Text2: 'Toyota' },
        { Text1: 'Odometer Mileage', Text2: '28' },
        { Text1: 'Odometer Status', Text2: 'Actual' },
        { Text1: 'Print', Text2: 'Actual' },
        { Text1: 'Deal ID', Text2: '7655434434' },
    ];
    const Lessor_section = [
        { Text1: 'Order Fulfilled By', Text2: 'ABC company' },
        { Text1: 'Pickup in Store / Postal Mail', Text2: 'Store' },
        { Text1: 'Download Postal Mail Carrier', Text2: 'Shipped' },
        {
            Text1: 'Express Mail Shipping', Text2: <div>
                <span className='listItem' style={{ marginRight: '0px' }}>
                    <a
                        style={{
                            fontFamily: 'Montserrat',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            marginRight: '0px',
                            color: '#44AA99',
                        }}
                    >
                        DOWNLOAD
                    </a>
                </span>

            </div>,
        },
        // { Text1: 'Address 2', Text2: '' },
        // { Text1: 'ZIP', Text2: '45040' },
        // { Text1: 'City', Text2: 'Mason' },
    ];
    const attachments_section = [
        { Text1: 'New Ohio Title Image' },
        { Text1: 'Driver License' },
        { Text1: 'Social Security Card' },
        { Text1: 'Completed Power or Attorney', },
        // { Text1: 'Shipping Lanel (Optional)', },
    ];
    const fees_section = [
        {
            Text1: 'Total Amount Due', Text2: <div className='total_amount_section'>
                <span style={{ fontSize: '2em' }}> $</span> <Input style={{ width: '40%' }} type="text" />
            </div>
        },
        {
            Text1: 'Confirm Total Amount Due', Text2: <div className='total_amount_section'>
                <span style={{ fontSize: '2em' }}> $</span> <Input style={{ width: '40%' }} type="text" /></div>
        },
        { Text1: 'Reciept Number', Text2: <div className='receipt_section'> <Input type="text" /></div> },
        { Text1: 'Confirm Reciept Number', Text2: <div className='receipt_section'> <Input type="text" /></div> },
    ];

    const rejectOrder = () => {
        setRejectDetails(true);
    };
    const rejectFeesOrder = () => {
        setfeesRejectOrder(true);
    };
    const closeModel = () => {
        setRejectDetails(false);
    };


    return (
        <div className='moreDetails'>
            {/* Summary Section */}
            <Collapse defaultActiveKey={['1']} expandIconPosition='right'>
                <Panel style={{ padding: 0 }} header={
                    <div>
                        <span className='summary_heading'>Summary</span>
                    </div>
                } key='1'>
                    <div>
                        <List
                            bordered
                            dataSource={summary}
                            renderItem={(item) => (
                                <List.Item>
                                    <span className='listItem'>{item.Text1}</span>
                                    <span className='listItem'>{item.Text2}</span>
                                </List.Item>
                            )}
                        />
                    </div>
                </Panel>
            </Collapse>
            <br />
            {/* Customer Section */}
            <Collapse defaultActiveKey={['1']} expandIconPosition='right'>
                <Panel style={{ padding: 0 }} header={
                    <div>
                        <span className='customer_heading'>Customer</span>
                    </div>
                } key='1'>
                    <div>
                        <List
                            header={<div className='owner_sub_heading'>Owners</div>}
                            bordered
                            dataSource={Customer}
                            renderItem={(item) => (
                                <List.Item>
                                    <span className='listItem'>{item.Text1}</span>
                                    <span className='listItem'>{item.Text2}</span>
                                </List.Item>
                            )}
                        />
                    </div>
                </Panel>
            </Collapse>
            <br />
            {/* Vehicle Section */}
            <Collapse defaultActiveKey={['1']} expandIconPosition='right'>
                <Panel style={{ padding: 0 }} header={
                    <div>
                        <span className='vehicle_heading'>Vehicle</span>
                    </div>
                } key='1'>
                    <div>
                        <List
                            bordered
                            dataSource={Vehicle_section}
                            renderItem={(item) => (
                                <List.Item>
                                    <span className='listItem'>{item.Text1}</span>
                                    <span className='listItem'>{item.Text2}</span>
                                </List.Item>
                            )}
                        />
                    </div>
                </Panel>
            </Collapse>
            <br />

            {/* Lessor Section */}
            <Collapse defaultActiveKey={['1']} expandIconPosition='right'>
                <Panel style={{ padding: 0 }} header={
                    <div>
                        <span className='lessor_heading'>Handling</span>
                    </div>
                } key='1'>
                    <div>
                        <List
                            bordered
                            dataSource={Lessor_section}
                            renderItem={(item) => (
                                <List.Item>
                                    <span className='listItem'>{item.Text1}</span>
                                    <span className='listItem'>{item.Text2}</span>
                                </List.Item>
                            )}
                        />
                    </div>
                </Panel>
            </Collapse>
            <br />
            {/* Attachments Section */}
            <Collapse defaultActiveKey={['1']} expandIconPosition='right'>
                <Panel
                    style={{ padding: 0, border: 'none' }}
                    header={
                        <div>
                            <span className='attachments_heading'>Attachments</span>
                        </div>
                    }
                    key='1'
                >
                    <div>
                        <List
                            bordered
                            dataSource={attachments_section}
                            renderItem={(item) => (
                                <List.Item>
                                    <span className='listItem'>{item.Text1}</span>
                                    <span className='listItem'>
                                        <a
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontWeight: 'bold',
                                                fontSize: '16px',
                                                color: '#44AA99',
                                            }}
                                        >
                                            DOWNLOAD
                    </a>
                                    </span>
                                </List.Item>
                            )}
                        />
                    </div>
                </Panel>
            </Collapse>
            <br />
            <Row justify='center' align='middle'>
                <Col>
                    <ButtonHOC
                        className='lock_order'> LOCK ORDER</ButtonHOC>
                </Col>
                <Col>
                    <ButtonHOC
                        ClickHandler={rejectOrder}
                        // onClick={rejectOrder}
                        className='reject_order'>Reject Order</ButtonHOC>
                </Col>


            </Row>
            <br />

            <br />
            {rejectDetails ? (
                <Fragment>

                    <Row justify='center' align='middle'>
                        <Col>
                            <TextArea rows={4} className='text_area' placeholder="Write here Reason of Rejection" />
                        </Col>
                    </Row>
                    <br />
                    <Row justify='center' align='middle'>
                        <Col span={2}>
                            <ButtonHOC
                                ClickHandler={closeModel}
                                className='cancel'
                                border='1px solid red'
                            >
                                Cancel
                </ButtonHOC>
                        </Col>
                        <Col span={2}>

                            <ButtonHOC
                                ClickHandler={closeModel}
                                className='submit'
                                border='1px solid #44AA99'

                            >
                                Submit
                </ButtonHOC>
                        </Col>
                    </Row>

                </Fragment>
            ) : ''}

            <br />
            {/* Fee Section */}

            {showFees ? (
                <Fragment>
                    <Collapse defaultActiveKey={['1']} expandIconPosition='right'>
                        <Panel style={{ padding: 0, border: 'none' }} header={
                            <div>
                                <span className='fee_heading'>Fee</span>
                            </div>
                        } key='1'>
                            <div>
                                <List
                                    header={<div className='fees_sub_heading' >FEES</div>}
                                    bordered
                                    dataSource={fees_section}
                                    renderItem={(item) => (
                                        <div>

                                            <List.Item>
                                                <span className='listItem'>{item.Text1}</span>
                                                <span className='listItem'>{item.Text2}</span>
                                            </List.Item>
                                        </div>
                                    )}
                                />
                                <br />
                                <Row justify='center' align='middle'>
                                    <Col>
                                        <Checkbox className='terms_checkbox' onChange={onChange}></Checkbox>

                                    </Col>

                                    <Col span={16}>
                                        <span className='terms_conditions'>
                                            I Understand this is final due to BMV. Payment will be made solely based on what is written here.BMV takes full responsibility for accuracy.
                            </span>
                                    </Col>
                                </Row>

                            </div>
                        </Panel>
                    </Collapse>
                    <br />
                    <Row justify='center' align='middle'>
                        <Col>
                            <span className='initials'>Enter Initials Here</span>
                        </Col>
                        <Col>
                            <span className='initials_contract'>Initials On Contract</span>
                        </Col>
                    </Row>
                    <br />
                    <Row justify='center' align='middle'>
                        <Col>
                            <Input className='initials_input' type='text' />
                        </Col>
                    </Row>
                    <br />
                    <Row justify='center' align='middle'>
                        <Col>
                            <ButtonHOC className='complete_order'>Complete Order</ButtonHOC>
                        </Col>
                        <Col>
                            <ButtonHOC
                                ClickHandler={rejectFeesOrder}
                                className='reject_order_initals'>Reject Order</ButtonHOC>
                        </Col>
                    </Row>
                    <br />
                    {feesRejectOrder ? (
                        <Row justify='center' align='middle'>
                            <Col>
                                <TextArea className='order_description' placeholder="Write here Reason of Rejection" />
                            </Col>
                        </Row>
                    ) : ''};

                </Fragment>) : ''}


        </div>
    );
};

export default MoreDetailsComponet;