/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Col, Collapse, List, Row } from 'antd';
import React, { Fragment, useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { OrderDetails, OrderReceipt } from './Interfaces/HomePageTableInterface';
import TableHeading from './TableHeading';
import { Link } from 'react-router-dom';
import { ButtonHOC, StatusSVG } from '../../index';


const HomePageTable: React.FC = () => {
    const { Panel } = Collapse;
    const [orderDetails, setorderDetails] = useState<OrderDetails>({
        OrderIDTitle: 'Order ID#',
        OrderIDBody: 123456789,
        PrimaryOwner: 'Primary Owner',
        ownerName: 'Jane Doe',
        Createdby: 'Created by',
        CreatedbyBody: 'DEALERSHIP_USER'
    });
    const [orderReceipt, setOrderReceipt] = useState<OrderReceipt>({
        TitleType: 'Title Type',
        TitleTypeBody: '1GNSK123456789',
        RecieptTitle: 'Reciept Number',
        RecieptBody: '123456',
        AcceptedByTitle: 'Accepted By',
        AcceptedByBody: 'BMV_USER'
    });
    const [currentPage, setCurrentPage] = useState(276);
    const [totalRows, setTotalRows] = useState(276);
    const [rowsPerPage, setRowsPerPage] = useState('10');

    const summary = [
        { Text1: 'Order ID#', Text2: '123456789', Text3: 'Primary Owner', Text4: 'Jane Doe', Text5: 'Created by', Text6: 'DEALERSHIP_USER' },
        { Text1: 'Title Type', Text2: '1GNSK123456789', Text3: 'Reciept Number', Text4: '123456', Text5: 'Accepted By', Text6: 'BMV_USER' },
    ];


    const decreasePage = () => {
        setCurrentPage(currentPage - 1);
    };
    const IncreasePage = () => {
        if (totalRows == currentPage) {
            return;
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    const RowsPerPage = (e: React.MouseEvent<HTMLSpanElement>): void => {
        const PageRow: any = e.currentTarget.dataset.id;
        setRowsPerPage(PageRow);
    };

    return (
        <Fragment >

            {/* Pagination section */}
            <Row className="pagination_row" justify='end'>
                <Col xs={24} sm={24} lg={10} xl={8} xxl={7}>
                    <span className="row_pages_length">
                        Rows per page:
                      <span data-id="10" onClick={(e) => RowsPerPage(e)}>10 </span>
                        <span data-id="20" onClick={RowsPerPage}>20 </span>
                        <span data-id="30" onClick={RowsPerPage}>30 </span>
                        <span data-id="40" onClick={RowsPerPage}>40 </span>
                        <span data-id="50" onClick={RowsPerPage}>50 </span>
                        <span data-id="100" onClick={RowsPerPage}>100 </span>
                    </span>
                </Col>
                <Col xs={12} sm={24}  lg={4} xl={3} xxl={2}>
                    <span className="total_pages_length">
                        1-{rowsPerPage}  of {totalRows}
                    </span>
                </Col>

                <Col xs={12} sm={24}  lg={6} xl={4} xxl={3}>
                    <span className="current_page">
                        <ArrowLeftOutlined onClick={decreasePage} />{' '}
                        {currentPage}
                        <ArrowRightOutlined onClick={IncreasePage} /> {' '}

                    </span>
                </Col>
            </Row>

            {/* table heading section */}
            <TableHeading />

            {/* 1st row */}
            <div className='first_row'>
                <Collapse style={{ background: '#ffffff' }} defaultActiveKey={['1']} expandIconPosition='left'>
                    <Panel style={{ padding: 0 }} header={
                       <div >
                       <Row align="middle" justify="space-around">
                        <Col xxl={0}>
                            </Col>
                            <Col xs={24} sm={20} md={3} lg={4} xxl={4}>
                                <span className="Submitted_Date">07/20/2020</span>
                            </Col>
                            <Col xs={24} sm={20} md={3} lg={3} xxl={2}>
                                <span className="Customer_name">
                                    Smith Alex
                              </span>
                            </Col>
                            <Col xs={24} sm={20} md={5} lg={5} xxl={3}>
                                <span className="Location">
                                    Jeff wyler cheverlet
                               </span>
                            </Col>
                            <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                <span className="Accepted_Date">
                                    07/20/2020
                               </span>
                            </Col>
                            <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                <span className="Completed_Date">
                                    07/20/2020
                                 </span>
                            </Col>
                            <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                <div className="accept_order">

                                    <ButtonHOC
                                        // className='New'
                                        color='#117733'
                                        height='35px'
                                        width='8.4em'
                                        radius='2rem'
                                        // background='white'
                                        border='1px solid #117733'
                                    >
                                        <StatusSVG />
                                        <span style={{ paddingLeft: '1em' }}> New</span>
                                    </ButtonHOC>
                                </div>
                                </Col>
                            </Row>
                        </div>} key='1'>
                        <div>
                            {/* <HomePageEditTable /> */}
                            <Row justify='space-around' >
                                <Col xl={0} xxl={0}>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={6} >
                                    <span className='listItem'>
                                        <span className="order_head" id="orderId">{orderDetails.OrderIDTitle}</span>
                                        <span className="order_body">
                                            {orderDetails.OrderIDBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="primary_head">{orderDetails.PrimaryOwner}</span>
                                        <span className="primary_body">
                                            {orderDetails.ownerName}
                                        </span>

                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="createdby_head">{orderDetails.Createdby}</span>
                                        <span className="createdby_body">
                                            {orderDetails.CreatedbyBody}
                                        </span>
                                    </span>
                                </Col>

                                <Col lg={3} >

                                </Col>
                            </Row>
                            <br />
                            <Row justify='space-around' >
                                <Col xl={0} xxl={0}>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={6} >
                                    <span className='listItem'>
                                        <span className="order_head">{orderReceipt.TitleType}</span>
                                        <span className="createdby_body">
                                            {orderReceipt.TitleTypeBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="primary_head" id="reciept-head">{orderReceipt.RecieptTitle}</span>
                                        <span className="primary_body">
                                            {orderReceipt.RecieptBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="createdby_head" id='created-head'>{orderReceipt.AcceptedByTitle}</span>
                                        <span className="createdby_body">
                                            {orderReceipt.AcceptedByBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col lg={3} >
                                </Col>
                                <Col>
                                    <div className='view_edit_btn' style={{ float: 'right' }}  >
                                        <Link to='/more_details'>
                                            <ButtonHOC >View/Edit</ButtonHOC>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Panel>
                </Collapse>
            </div>


            {/* 2nd row */}

            <div className='first_row'>
                <Collapse style={{ background: '#ffffff' }} defaultActiveKey={['0']} expandIconPosition='left'>
                    <Panel style={{ padding: 0 }} header={
                        <div >
                           <Row align="middle" justify="space-around">
                            <Col xxl={0}>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={4} xxl={4}>
                                    <span className="Submitted_Date">07/20/2020</span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={2}>
                                    <span className="Customer_name">
                                        Smith Alex
                                  </span>
                                </Col>
                                <Col xs={24} sm={20} md={5} lg={5} xxl={3}>
                                    <span className="Location">
                                        Jeff wyler cheverlet
                                   </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <span className="Accepted_Date">
                                        07/20/2020
                                   </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <span className="Completed_Date">
                                        07/20/2020
                                     </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <div className="accept_order">

                                        <ButtonHOC
                                            // className='New'
                                            color='#117733'
                                            height='35px'
                                            width='8.4em'
                                            radius='2rem'
                                            // background='white'
                                            border='1px solid #117733'
                                        >
                                            <StatusSVG />
                                            <span style={{ paddingLeft: '1em' }}> Rejected</span>
                                        </ButtonHOC>
                                    </div>
                                </Col>
                            </Row>
                        </div>} key='1'>
                        <div>
                            {/* <HomePageEditTable /> */}
                            <Row justify='space-around' >
                                <Col xl={0} xxl={0}>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={6} >
                                    <span className='listItem'>
                                        <span className="order_head" id="orderId">{orderDetails.OrderIDTitle}</span>
                                        <span className="order_body">
                                            {orderDetails.OrderIDBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="primary_head">{orderDetails.PrimaryOwner}</span>
                                        <span className="primary_body">
                                            {orderDetails.ownerName}
                                        </span>

                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="createdby_head">{orderDetails.Createdby}</span>
                                        <span className="createdby_body">
                                            {orderDetails.CreatedbyBody}
                                        </span>
                                    </span>
                                </Col>

                                <Col lg={3} >

                                </Col>
                            </Row>
                            <br />
                            <Row justify='space-around' >
                                <Col xl={0} xxl={0}>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={6} >
                                    <span className='listItem'>
                                        <span className="order_head">{orderReceipt.TitleType}</span>
                                        <span className="createdby_body">
                                            {orderReceipt.TitleTypeBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="primary_head" id="reciept-head">{orderReceipt.RecieptTitle}</span>
                                        <span className="primary_body">
                                            {orderReceipt.RecieptBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="createdby_head" id='created-head'>{orderReceipt.AcceptedByTitle}</span>
                                        <span className="createdby_body">
                                            {orderReceipt.AcceptedByBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col lg={3} >
                                </Col>
                                <Col>
                                    <div className='view_edit_btn' style={{ float: 'right' }}  >
                                        <Link to='/more_details'>
                                            <ButtonHOC >View/Edit</ButtonHOC>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Panel>
                </Collapse>
            </div>


            <div className='first_row'>
                <Collapse style={{ background: '#CC6677' }} defaultActiveKey={['0']} expandIconPosition='left' className='collapse_icons' >
                    <Panel style={{ padding: 0 }} header={
                        <div >
                          <Row align="middle" justify="space-around">
                            <Col xxl={0}>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={4} xxl={4}>
                                    <span className="Submitted_Date" style={{ color: 'white' }}>07/20/2020</span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={2}>
                                    <span className="Customer_name" style={{ color: 'white' }}>
                                        Smith Alex
                                  </span>
                                </Col>
                                <Col xs={24} sm={20} md={5} lg={5} xxl={3}>
                                    <span className="Location" style={{ color: 'white' }}>
                                        Jeff wyler cheverlet
                                   </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <span className="Accepted_Date" style={{ color: 'white' }}>
                                        07/20/2020
                                   </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <span className="Completed_Date" style={{ color: 'white' }}>
                                        07/20/2020
                                     </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <div className="accept_order">

                                        <ButtonHOC
                                            // className='New'
                                            color='white'
                                            height='35px'
                                            width='8.4em'
                                            radius='2rem'
                                            background='#CC6677'
                                            border='1px solid white'
                                        >
                                            <StatusSVG  color='white'/>
                                            <span style={{ paddingLeft: '0.5em' }}> Accepted</span>
                                        </ButtonHOC>
                                    </div>
                                </Col>
                            </Row>
                        </div>} key='1'>
                        <div>
                            {/* <HomePageEditTable /> */}
                            <Row justify='space-around' >
                                <Col xl={0} xxl={0}>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={6} >
                                    <span className='listItem'>
                                        <span className="order_head" id="orderId">{orderDetails.OrderIDTitle}</span>
                                        <span className="order_body">
                                            {orderDetails.OrderIDBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="primary_head">{orderDetails.PrimaryOwner}</span>
                                        <span className="primary_body">
                                            {orderDetails.ownerName}
                                        </span>

                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="createdby_head">{orderDetails.Createdby}</span>
                                        <span className="createdby_body">
                                            {orderDetails.CreatedbyBody}
                                        </span>
                                    </span>
                                </Col>

                                <Col lg={3} >

                                </Col>
                            </Row>
                            <br />
                            <Row justify='space-around' >
                                <Col xl={0} xxl={0}>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={6} >
                                    <span className='listItem'>
                                        <span className="order_head">{orderReceipt.TitleType}</span>
                                        <span className="createdby_body">
                                            {orderReceipt.TitleTypeBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="primary_head" id="reciept-head">{orderReceipt.RecieptTitle}</span>
                                        <span className="primary_body">
                                            {orderReceipt.RecieptBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="createdby_head" id='created-head'>{orderReceipt.AcceptedByTitle}</span>
                                        <span className="createdby_body">
                                            {orderReceipt.AcceptedByBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col lg={3} >
                                </Col>
                                <Col>
                                    <div className='view_edit_btn' style={{ float: 'right' }}  >
                                        <Link to='/more_details'>
                                            <ButtonHOC >View/Edit</ButtonHOC>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Panel>
                </Collapse>
            </div>



            <div className='first_row'>
                <Collapse style={{ background: '#ffffff' }} defaultActiveKey={['0']} expandIconPosition='left'>
                    <Panel style={{ padding: 0 }} header={
                        <div >
                           <Row align="middle" justify="space-around">
                            <Col xxl={0}>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={4} xxl={4}>
                                    <span className="Submitted_Date">07/20/2020</span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={2}>
                                    <span className="Customer_name">
                                        Smith Alex
                                  </span>
                                </Col>
                                <Col xs={24} sm={20} md={5} lg={5} xxl={3}>
                                    <span className="Location">
                                        Jeff wyler cheverlet
                                   </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <span className="Accepted_Date">
                                        07/20/2020
                                   </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <span className="Completed_Date">
                                        07/20/2020
                                     </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <div className="accept_order">

                                        <ButtonHOC
                                            // className='New'
                                            color='#117733'
                                            height='35px'
                                            width='8.4em'
                                            radius='2rem'
                                            // background='white'
                                            border='1px solid #117733'
                                        >
                                            <StatusSVG />
                                            <span style={{ paddingLeft: '1em' }}> New</span>
                                        </ButtonHOC>
                                    </div>
                                </Col>
                            </Row>
                        </div>} key='1'>
                        <div>
                            {/* <HomePageEditTable /> */}
                            <Row justify='space-around' >
                                <Col xl={0} xxl={0}>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={6} >
                                    <span className='listItem'>
                                        <span className="order_head" id="orderId">{orderDetails.OrderIDTitle}</span>
                                        <span className="order_body">
                                            {orderDetails.OrderIDBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="primary_head">{orderDetails.PrimaryOwner}</span>
                                        <span className="primary_body">
                                            {orderDetails.ownerName}
                                        </span>

                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="createdby_head">{orderDetails.Createdby}</span>
                                        <span className="createdby_body">
                                            {orderDetails.CreatedbyBody}
                                        </span>
                                    </span>
                                </Col>

                                <Col lg={3} >

                                </Col>
                            </Row>
                            <br />
                            <Row justify='space-around' >
                                <Col xl={0} xxl={0}>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={6} >
                                    <span className='listItem'>
                                        <span className="order_head">{orderReceipt.TitleType}</span>
                                        <span className="createdby_body">
                                            {orderReceipt.TitleTypeBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="primary_head" id="reciept-head">{orderReceipt.RecieptTitle}</span>
                                        <span className="primary_body">
                                            {orderReceipt.RecieptBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="createdby_head" id='created-head'>{orderReceipt.AcceptedByTitle}</span>
                                        <span className="createdby_body">
                                            {orderReceipt.AcceptedByBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col lg={3} >
                                </Col>
                                <Col>
                                    <div className='view_edit_btn' style={{ float: 'right' }}  >
                                        <Link to='/more_details'>
                                            <ButtonHOC >View/Edit</ButtonHOC>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Panel>
                </Collapse>
            </div>



            <div className='first_row'>
                <Collapse style={{ background: '#ffffff' }} defaultActiveKey={['0']} expandIconPosition='left'>
                    <Panel style={{ padding: 0 }} header={
                        <div >
                           <Row align="middle" justify="space-around">
                            <Col xxl={0}>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={4} xxl={4}>
                                    <span className="Submitted_Date">07/20/2020</span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={2}>
                                    <span className="Customer_name">
                                        Smith Alex
                                  </span>
                                </Col>
                                <Col xs={24} sm={20} md={5} lg={5} xxl={3}>
                                    <span className="Location">
                                        Jeff wyler cheverlet
                                   </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <span className="Accepted_Date">
                                        07/20/2020
                                   </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <span className="Completed_Date">
                                        07/20/2020
                                     </span>
                                </Col>
                                <Col xs={24} sm={20} md={3} lg={3} xxl={3}>
                                    <div className="accept_order">

                                    <ButtonHOC
                                            // className='New'
                                            color='#117733'
                                            height='35px'
                                            width='8.4em'
                                            radius='2rem'
                                            background= '#88CCEE'
                                            border='1px solid #88CCEE'
                                        >
                                            <StatusSVG />
                                            <span style={{ paddingLeft: '0.3em' }}> Completed</span>
                                        </ButtonHOC>
                                    </div>
                                </Col>
                            </Row>
                        </div>} key='1'>
                        <div>
                            {/* <HomePageEditTable /> */}
                            <Row justify='space-around' >
                                <Col xl={0} xxl={0}>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={6} >
                                    <span className='listItem'>
                                        <span className="order_head" id="orderId">{orderDetails.OrderIDTitle}</span>
                                        <span className="order_body">
                                            {orderDetails.OrderIDBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="primary_head">{orderDetails.PrimaryOwner}</span>
                                        <span className="primary_body">
                                            {orderDetails.ownerName}
                                        </span>

                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="createdby_head">{orderDetails.Createdby}</span>
                                        <span className="createdby_body">
                                            {orderDetails.CreatedbyBody}
                                        </span>
                                    </span>
                                </Col>

                                <Col lg={3} >

                                </Col>
                            </Row>
                            <br />
                            <Row justify='space-around' >
                                <Col xl={0} xxl={0}>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={6} >
                                    <span className='listItem'>
                                        <span className="order_head">{orderReceipt.TitleType}</span>
                                        <span className="createdby_body">
                                            {orderReceipt.TitleTypeBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="primary_head" id="reciept-head">{orderReceipt.RecieptTitle}</span>
                                        <span className="primary_body">
                                            {orderReceipt.RecieptBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xxl={7} >
                                    <span className='listItem'>
                                        <span className="createdby_head" id='created-head'>{orderReceipt.AcceptedByTitle}</span>
                                        <span className="createdby_body">
                                            {orderReceipt.AcceptedByBody}
                                        </span>
                                    </span>
                                </Col>
                                <Col lg={3} >
                                </Col>
                                <Col>
                                    <div className='view_edit_btn' style={{ float: 'right' }}  >
                                        <Link to='/more_details'>
                                            <ButtonHOC >View/Edit</ButtonHOC>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Panel>
                </Collapse>
            </div>

            {/* 4th row */}




        </Fragment >
    );
};

export default HomePageTable;