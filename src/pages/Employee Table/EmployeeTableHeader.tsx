/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Button, Col, Input, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage/HomePageHeader/HomePageHeader.scss';
import EmployeeRowOne from './EmployeeRowOne';


const EmployeeTableHeader: React.FC = () => {

    // const sortByName = () => {

    // };
    return (
        <div>
            <EmployeeRowOne />

            {/* 2nd header row */}
            <Row className="second_main_row" align="middle" justify='end' >

                <Col xs={0} xl={2} xxl={9}></Col>
                <Col>
                    <span className='sort_items'>
                        <span className="sort_tag">Sort by :</span>
                        <li
                            //  onClick={sortByName}
                            className='first_child'>Name</li>
                        <li className='other_child'>Date</li>

                    </span>
                </Col>
                <Col span={1}>
                </Col>

            </Row>
        </div>
    );
};

export default EmployeeTableHeader;
