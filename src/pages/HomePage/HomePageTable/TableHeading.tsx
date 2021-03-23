
import { Col, Row } from 'antd';
import React from 'react';
import './HomePageTable.scss';




const TableHeading = () => {
    return (
        <div>

            {/* table heading section */}
            <Row className="headings_section" >
                <Col xs={24} sm={0} lg={0} xl={0} xxl={0}>
                </Col>
                <Col xs={24} sm={4} lg={4} xl={4} xxl={4}>
                    <span className="Submitted_Date_title">Submitted Date</span>
                </Col>
                <Col xs={24} sm={4} lg={4} xl={4} xxl={4}>
                    <span className="Customer_name_title">
                        Customer Name
              </span>
                </Col>
                <Col xs={24} sm={3} lg={3} xl={3} xxl={3}>
                    <span className="Location_title">
                        Location
              </span>
                </Col>
                <Col xs={24} sm={4} lg={4} xl={4} xxl={4}>
                    <span className="Accepted_Date_title">
                        Accepted Date
              </span>
                </Col>
                <Col xs={24} sm={4} lg={4} xl={4} xxl={4}>
                    <span className="Completed_Date_title">
                        Completed Date
              </span>
                </Col>
                <Col xs={24} sm={4} lg={4} xl={4} xxl={4}>
                    <div className="accept_order_title">
                        Accept an Order
              </div>
                </Col>
            </Row>

        </div>
    );
};

export default TableHeading;
