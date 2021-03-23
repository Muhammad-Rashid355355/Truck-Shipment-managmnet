import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonHOC from '../Buttons/ButtonHOC';
import EmployeeRowOne from '../Employee Table/EmployeeRowOne';
import './TokenList.scss';


const TokenListHeader: React.FC = () => {
    return (
        <div>
            <EmployeeRowOne />
            <Row className="new_key_row" align="middle" justify="end">
                <Col >
                    <Link to='/new_token'>
                        <ButtonHOC className="add_new_key" >ADD NEW KEY</ButtonHOC>
                    </Link>
                </Col>
                <Col span={1}>
                </Col>
            </Row>
        </div>
    );
};

export default TokenListHeader;
