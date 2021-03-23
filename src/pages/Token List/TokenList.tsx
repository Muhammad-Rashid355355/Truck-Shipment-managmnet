
import { SmallAvatar, ButtonHOC } from '../index';
import React from 'react';
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Tokenimg from '../Svg/Tokenimg.jpg';

const TokenList: React.FC = () => {
    return (
        <div className="tokenlist-div">
            <div className="genrated-app"> Genrated Apps</div>
            <Row className='table_header' >
                
                <Col xs={20} sm={18} md={3} lg={3} xl={2} xxl={2}>
                    <span className='table_head'><span className="Name">Name</span></span>
                </Col>
                <Col xs={20} sm={18} md={8} lg={9} xl={9} xxl={11}>
                    <span className='table_head'>Status</span>
                </Col>
                <Col xs={20} sm={18} md={5} lg={4} xl={4} xxl={3}>
                    <span className='table_head'><span className="type">Type</span></span>

                </Col>
                <Col xs={20} sm={18} md={6} lg={7} xl={7} xxl={7}>
                    <span className='table_head'><span className="Action_tokon_header">Action</span></span>
                </Col>
            </Row>
            <br />
            <Row align='middle' className="first-row">

                <Col xs={24} sm={24} md={3} lg={3} xl={2} xxl={2}>
                    {/* <SmallAvatar /> */}
                    <img src={Tokenimg} className="GA-img"></img>
                </Col>

                <Col xs={20} sm={20} md={4} lg={4} xl={4} xxl={5}>
                    <span className="peter">Georg Download</span>
                </Col>
                <Col xs={20} sm={20} md={6} lg={7} xl={7} xxl={7}>
                    <Row>
                        <span className="activated">Activated</span>
                    </Row>
                    <Row>
                        <span className="live-account">Owned by: lane@govsoft.us</span>
                    </Row>
                    <Row>
                        <span className="update">Updated 15,Feb 2021 4:35PM</span>
                    </Row>
                </Col>
                <Col xs={20} sm={20} md={5} lg={4} xl={5} xxl={5}>
                    <Row>
                        <span className="JWT">  JWT</span>
                    </Row>
                   
                </Col>

                <Col xs={20} sm={20} md={3} lg={3} xl={2} xxl={1}>
                    <Button className="btn-edit"><span className="edit">...</span></Button>
                </Col>
                <Col xs={20} sm={20} md={3} lg={2} xl={3} xxl={2}>
                    {/* <ButtonHOC className="revoke-btn"><span className="revoke-text">
                        <Link to='/secrets'>
                            <span style={{ color: 'white' }}>Revoke Key</span>
                        </Link>
                    </span></ButtonHOC> */}
                </Col>
            </Row>

            <hr />
            <Row align='middle'>
            <Col xs={24} sm={24} md={3} lg={3} xl={2} xxl={2}>
                    {/* <SmallAvatar /> */}
                    <img src={Tokenimg} className="GA-img"></img>
                </Col>

                <Col xs={20} sm={20} md={4} lg={4} xl={4} xxl={5}>
                    <span className="peter">Download OAuth</span>
                </Col>
                <Col xs={20} sm={20} md={6} lg={7} xl={7} xxl={7}>
                    <Row>
                        <span className="activated">Activated</span>
                    </Row>
                    <Row>
                        <span className="live-account">Owned by: max@govsoft.us</span>
                    </Row>
                    <Row>
                        <span className="update">Updated 15,Feb 2021 4:35PM</span>
                    </Row>
                </Col>
                <Col xs={20} sm={20} md={5} lg={4} xl={5} xxl={5}>
                    <Row>
                        <span className="JWT">  JWT</span>
                    </Row>
                   
                </Col>

                <Col xs={20} sm={20} md={3} lg={3} xl={2} xxl={1}>
                    <Button className="btn-edit"><span className="edit">...</span></Button>
                </Col>
                <Col xs={20} sm={20} md={3} lg={2} xl={3} xxl={2}>
                    {/* <ButtonHOC className="revoke-btn"><span className="revoke-text">
                        <Link to='/secrets'>
                            <span style={{ color: 'white' }}>Revoke Key</span>
                        </Link>
                    </span></ButtonHOC> */}
                </Col>
            </Row>
            <hr />
            <Row align='middle'>
            <Col xs={24} sm={24} md={3} lg={3} xl={2} xxl={2}>
                    {/* <SmallAvatar /> */}
                    <img src={Tokenimg} className="GA-img"></img>
                </Col>

                <Col xs={20} sm={20} md={4} lg={4} xl={4} xxl={5}>
                    <span className="peter">Downloader</span>
                </Col>
                <Col xs={20} sm={20} md={6} lg={7} xl={7} xxl={7}>
                    <Row>
                        <span className="activated">Activated</span>
                    </Row>
                    <Row>
                        <span className="live-account">Owned by: Sandra@govsoft.us</span>
                    </Row>
                    <Row>
                        <span className="update">Updated 15,Feb 2021 4:35PM</span>
                    </Row>
                </Col>
                <Col xs={20} sm={20} md={5} lg={4} xl={5} xxl={5}>
                    <Row>
                        <span className="JWT">  JWT</span>
                    </Row>
                   
                </Col>

                <Col xs={20} sm={20} md={3} lg={3} xl={2} xxl={1}>
                    <Button className="btn-edit"><span className="edit">...</span></Button>
                </Col>
                <Col xs={20} sm={20} md={3} lg={2} xl={3} xxl={2}>
                    {/* <ButtonHOC className="revoke-btn"><span className="revoke-text">
                        <Link to='/secrets'>
                            <span style={{ color: 'white' }}>Revoke Key</span>
                        </Link>
                    </span></ButtonHOC> */}
                </Col>
            </Row>
        </div>
    );
};

export default TokenList;
