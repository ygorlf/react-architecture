import React, { Component } from 'react';
import styled from 'styled-components';

// Assets
import logo from '../../assets/kraken.png';
import spinner from '../../assets/spinner.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, rgba(155,69,232,1) 35%, rgba(96,31,180,1) 100%);
`;

const FormContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  max-width: 660px;
  height: 60vh;
  border-radius: 8px;
  background-color: #FFF;
`;

const Logo = styled.img`
  position: absolute;
  top: 5%;
  left: 50%;
  width: 120px;
  height: 60px;
  transform: translateX(-50%);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
`;

const Label = styled.label`
  display: block;
  color: #000;
  font: 400 .9rem 'Roboto', sans-serif;
`;

const Email = styled.input`
  width: 100%;
  height: 35px;
  margin: 1rem auto;
  padding: 0 2%;
  border: 1px solid #505050;
  color: #505050;
  font: 400 .8rem 'Roboto', sans-serif;
`;

const Password = styled.input`
  width: 100%;
  height: 35px;
  margin: 1rem auto;
  padding: 0 2%;
  border: 1px solid #505050;
  color: #505050;
  font: 400 .8rem 'Roboto', sans-serif;
`;

const Submit = styled.button`
  position: absolute;
  bottom: 5%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 40px;
  border: none;
  cursor: pointer;
  color: #000;
  font: 400 .8rem 'Roboto', sans-serif;
  transform: translateX(-50%);
  background-color: #f7f783; 
`;

const Spinner = styled.img`
  position: absolute;
  bottom: 2%;
  left: 50%;
  display: block;
  width: 100px;
  height: 80px;
  transform: translateX(-50%);
`;

class Login extends Component {
  state = {
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state;

    return (
      <Container>
        <FormContainer>
          <Logo src={logo} />
          <Form onSubmit={this.handleLogin}>
            <Label>
              Email:
            </Label>
            <Email
              ref={(node) => {
                this.email = node;
              }}
              type="email"
              required
              placeholder="Email"
            />
            <Label>
              Password:
            </Label>
            <Email
              ref={(node) => {
                this.password = node;
              }}
              type="password"
              required
              placeholder="Password"
            />
            {isLoading && (
              <Spinner src={spinner} />
            )}
            {!isLoading && (
              <Submit>
                Login
              </Submit>
            )}
          </Form>
        </FormContainer>
      </Container>
    );
  }
}

export default Login;
