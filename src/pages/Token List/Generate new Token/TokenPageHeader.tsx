/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonHOC, EmployeeRowOne } from '../../index';

const TokenPageHeader: React.FC = () => {
    const CheckboxGroup = Checkbox.Group;
    const plainOptions = ['Accepted', 'Completed', 'Open'];
    const defaultCheckedList = ['Completed'];

    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [, setIndeterminate] = React.useState(true);
    const [, setCheckAll] = React.useState(false);

    const onChange = (list: any) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };
    return (
        <div>
            <EmployeeRowOne />
            {/* 2nd header row */}
            <Row justify="start">
                <Col>
                    <span className='status'>Processing Status</span>
                </Col>
            </Row>
            {/* 3rd header row */}

            <Row className="second_main_row" align="middle" justify='space-between' >
                <Col>
                    <span className='checkboxes_list'>
                        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                        {/* <li className="location_filter">Location Filter</li> */}
                    </span>
                </Col>
                <Col style={{ paddingRight: '1em' }}>
                    <span className='sort_items'>
                        <span className="sort_tag">Sort by :</span>
                        <li className='first_child'>Name</li>
                        <li className='other_child'>Date</li>
                        <li className='other_child'>LOC</li>
                        <li className='other_child'>Status</li>
                    </span>
                    <span className='btn_orders'>
                        <Link to="/">
                            <ButtonHOC className="my_orders_btn"
                                radius='2rem'  >
                                View My Orders
         </ButtonHOC>
                        </Link>
                        <Link to="/all_orders">
                            <ButtonHOC className="all_orders_btn"
                                radius='2rem'  >
                                View All Orders
              </ButtonHOC>
                        </Link>
                    </span>
                </Col>
            </Row>

        </div>
    );
};

export default TokenPageHeader;
