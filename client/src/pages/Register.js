import React from "react";
import { Button, Form, Input } from "antd";

const Register = () => {
  const onfinishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler}>
          <Form.Item label="Name" name="name">
            <Input type="text" required></Input>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required></Input>
          </Form.Item>
          <Button>Register</Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
