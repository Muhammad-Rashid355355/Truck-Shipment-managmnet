import { Row, Col } from 'antd';
import React from 'react';
import './TermsCondition.scss';
import { ButtonHOC, AvatarSvg } from '../index';


interface TermsInterface {
    handleOk: () => void
    handleCancel: () => void
}

const TermCondition: React.FC<TermsInterface> = ({ handleOk, handleCancel }) => {

    return (
        <div  >
            <Row justify="space-around" align="middle">
                <Col className="terms-page">
                    <Row justify="space-around" align="middle">
                        <AvatarSvg />
                    </Row>
                    <br />
                    <Row justify="space-around" align="middle">
                        <span className="jwt-api">JWT API License & Terms of Use</span>
                    </Row>
                    <Row justify="space-around" align="middle">
                        <span className="Api-license">By Clikcing agree, you a indicate you have read and agree to<br />
                                     the API License & Terms of Use</span>
                    </Row>
                    <br />
                    <Row justify="center" align="middle">
                        <Col xs={20} sm={6} md={5} lg={4} xl={4} xxl={5} className="agree">
                            <ButtonHOC
                                ClickHandler={handleOk}
                                className="agree-btn"><span className="agree-btn-text">Agree</span></ButtonHOC>
                        </Col>
                        <Col xs={20} sm={8} md={3} lg={2} xl={4} xxl={5} >
                            <ButtonHOC
                                ClickHandler={handleCancel}

                                className="Cancel-btn"><span className="Cancel-btn-text">Cancel</span></ButtonHOC>
                        </Col>
                    </Row>


                </Col>
            </Row>





        </div>
    );
};
export default TermCondition;