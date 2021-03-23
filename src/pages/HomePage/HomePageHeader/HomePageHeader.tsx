import { Avatar, Checkbox, Col, Input, Row } from 'antd';
import React, { useState } from 'react';
import { FilterOutlined, SearchOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ButtonHOC } from '../../index';


const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Accepted', 'Completed', 'New', 'Rejected'];
const defaultCheckedList = ['Completed'];

const HomePageHeader: React.FC = () => {

    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [, setIndeterminate] = React.useState(true);
    const [, setCheckAll] = React.useState(false);

    const onChange = (list: any) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const [rotating, setRotate] = useState(false);

    const syncData = () => {
        setRotate(true);
        setTimeout(() => {
            setRotate(false);
        }, 1000);
    };
    const searchData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('search');
    };
    const filterData = (e: any) => {
        console.log('filter');
    };

    return (
        <div className="Home_header_page_container">
            <Row className="home_1st_row" align="middle" justify='space-between' >
                <Col >
                    <h1 className="logo_title" >
                        <Link to="/">
                            <span style={{ color: '#25213B' }}>DR Porter</span>
                        </Link>
                    </h1>
                    <small onClick={syncData} className='date_view'>
                        Date as of 12/11/2020 -- 01:12 AM
                        {' '} <SyncOutlined spin={!!rotating} />
                    </small>
                </Col>
                <Col className="search_section" >
                    <Input
                        className='search_input'
                        placeholder='Aspen Weste' />
                    <ButtonHOC
                        buttonname='search'
                        ClickHandler={(e: any) => searchData(e)}
                        className='search'
                        border='1px solid #332288'
                        icon={<SearchOutlined style={{ color: '#332288' }} />}
                    >
                    </ButtonHOC>
                    <span className="filter_avatar" >
                        <ButtonHOC className='filter'
                            buttonname='search'
                            ClickHandler={(e: any) => filterData(e)}
                            border='1px solid #332288'
                            icon={<FilterOutlined style={{ color: '#332288' }} />}
                        >
                        </ButtonHOC>
                        <Avatar className='avatar_profile' src='https://picsum.photos/500/300?random=1' icon={<UserOutlined />} />
                    </span>
                </Col>
            </Row>

            {/* 2nd header row */}
            <Row justify="start" className='process_status'>
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
                <Col style={{ paddingRight: '2em' }}>
                    <span className='sort_items'>
                        <span className="sort_tag">Sort by :</span>
                        <li className='first_child'>Name</li>
                        <li className='other_child'>Date</li>
                        <li className='other_child'>LOC</li>
                        <li className='other_child'>Status</li>
                    </span>
                    <span className='btn_orders'>
                        <Link to="/GeorgDownload">
                            <ButtonHOC
                                className="my_orders_btn"
                                border='1px solid #332288'
                                radius='2rem'
                            >
                                View My Orders
                            </ButtonHOC>
                        </Link>
                        <Link to="/all_orders">
                            <ButtonHOC
                                // clickHandler={(e)=>}
                                className="all_orders_btn"
                                border='1px solid #332288'
                                radius='2rem'
                            >
                                View All Orders
                            </ButtonHOC>
                        </Link>
                    </span>
                </Col>
            </Row>

        </div >
    );
};

export default HomePageHeader;
