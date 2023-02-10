import { darkModeVar } from 'apollo';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Button = styled.div`
  color: ${(props) => props.theme.Button};
`;

// const Wrapper = styled.section`
// padding: 4em;
// flex-direction: column;
// padding: 4em;
// background: white;
// `;

function Login() {
  return (
    <div>
      <Container>
        {/* <Wrapper> */}
        <Title>Instagram</Title>
        <form>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <button type="submit"> 로그인 </button>
        </form>

        <button onClick={() => darkModeVar(true)}>Dark Mode</button>
        <button onClick={() => darkModeVar(false)}>Light Mode</button>
        {/* </Wrapper> */}
      </Container>
    </div>
  );
}

export default Login;
