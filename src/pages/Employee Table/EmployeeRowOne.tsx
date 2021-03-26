/* eslint-disable eqeqeq */
import { Avatar, Col, Input, Row } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterOutlined, SearchOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons';
import './EmployeeTable.scss';
import ButtonHOC from '../Buttons/ButtonHOC';


const EmployeeRowOne: React.FC = () => {
    const [rotating, setRotate] = useState(false);
    const syncData = () => {
        setRotate(true);
        setTimeout(() => {
            setRotate(false);
        }, 1000);
    };

    return (
        <div>
            <Row gutter={[8, 32]} className="home_1st_row" align="middle" justify='space-between'>
                <Col  >
                    <h1 className="logo_title" style={{ display: 'inline-block' }} >
                        <Link to="/">
                            <span style={{ color: '#25213B' }}>DR Porter</span>
                        </Link>
                    </h1>
                    <small onClick={syncData} className='date_view'>Date as of 12/11/2020 -- 01:12 AM
                    {' '} <SyncOutlined spin={!!rotating} />
                        {/* {' '} <i className={`fas fa-sync ${rotate ? 'fa-spin' : ''} `}></i> */}
                    </small>
                </Col>
                <Col className="search_section" style={{ paddingRight: '1em' }} >
                    <ButtonHOC
                        radius='1.5rem'
                        border='1px solid #332288'
                        className='export_csv'
                    >
                        Export CSV</ButtonHOC>
                    <Input
                        className='search_input'
                        placeholder='Search' />
                    <ButtonHOC className='search'
                        border='1px solid #332288'
                        icon={<SearchOutlined style={{ color: '#332288' }} />}>
                    </ButtonHOC>
                    {/* </span> */}
                    <span className='filter_avatar'>
                        <ButtonHOC className='filter'
                            border='1px solid #332288'
                            icon={<FilterOutlined style={{ color: '#332288' }} />}   >
                        </ButtonHOC>
                        <Avatar className='avatar_profile' src='https://picsum.photos/500/300?random=1' icon={<UserOutlined />} />
                    </span>
                </Col>

            </Row>
        </div>
    );
};

export default EmployeeRowOne;
