import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';
import { CarSvg, LoginSvg } from '../index';
import { Link } from 'react-router-dom';
import tempsnip from '../../assets/images/zMVjMS.png';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="mainPage">
      <span>
        <LoginSvg />
      </span>
      {/* __________ Login Form ___________________________________________*/}
      <div className="loginForm">
        <CarSvg />
        <h3
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '40px',
          }}
        >
          DR Porter
        </h3>
        {/* Form */}
        <Form
          className="formEl"
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className="inputField" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className="inputField" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item>
            {/* {!isAuthenticated && ( */}
            <Link to='/dashboard'>

              <Button
                // onClick={() => loginWithRedirect()}
                className="btn-login"
                type="primary"
                htmlType="submit"
                block>
                Login
              </Button>
            </Link>
          </Form.Item>
          <p className="helpline">Helpline 111-222-333</p>
        </Form>
      </div>
      <span>
        <img className="svg2" src={tempsnip}></img>
      </span>
    </div>
  );
};

export default Login;


