import React from 'react';
import { Result, Button,Row,Col } from 'antd';
import './ActivatedApp.scss';

const ActivatedApp=()=>{
    return(
<div>
<Row justify='center'>
<Col span={12}>


  <Result
    status="success"
    title="Your app is activated on the account"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      
      <Button className="Diactivated_btn" key="buy">Diactivated your App</Button>,
    ]}
  />,
</Col>
</Row>
</div>
    );
};
export default ActivatedApp;