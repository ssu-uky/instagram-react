import { Component, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';

import styles from './styles';

import routes from 'routes';

// Styled-Component
import { ThemeProvider } from 'styled-components';

// 아폴로를 불러오려면 내가 만든 루트 폴더에서 불러와달라고 경로를 설정해주어야함
// apollo - reactive variables
import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar, darkModeVar } from './apollo';

import { lightTheme, darkTheme, Globalstyles } from './styles';

// ----------- styles.js 로 이동 ----------------

// const lightTheme = {
//   fontColor: '#c2c2c2',
//   bgColor: 'lightgray',
// };

// const darkTheme = {
//   fontColor: 'white',
//   bgColor: '#000',
// };

// --------------------------------------------

function App() {
  // const isLoggedIn = useState (false); > 아폴로 사용 전 이렇게 사용함
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Globalstyles />
      <div>
        <Router>
          <Routes>
            {/* 로그인 ? true(home 이동) : false(login 이동) */}
            {/* home / profile 이렇게 두 방법으로 사용 가능  */}
            {/* routes.js 에서 선언했기 때문에 사용 가능  */}
            <Route path={routes.home} element={isLoggedIn ? <Home /> : <Login />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path={routes.signUp} element={isLoggedIn ? null : <SignUp />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
