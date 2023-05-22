import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";
import MyPage from "./components/MyPage";
import StartPage from "./components/StartPage";
import MainPage from "./components/MainPage";
import Map from "./components/Kakao";
import { locations } from "./data/locations";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [myPageOpen, setMyPageOpen] = useState(false);
  const [mainPageOpen, setMainPageOpen] = useState(false);

  const logInDispatcher = () => {
    dispatch({ type: "login" });
  };

  const logOutDispatcher = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div className="w-screen relative">
      <Header
        login={login}
        onLogOut={logOutDispatcher}
        isLoginOpen={loginModalOpen}
        onLoginClick={setLoginModalOpen}
        isSignUpOpen={signUpModalOpen}
        onSignUpClick={setSignUpModalOpen}
        isMyPageOpen={myPageOpen}
        onMyPageClick={setMyPageOpen}
      />
      {login ? <Map locations={locations} /> : <StartPage />}
      {/* <StartPage /> */}
      {loginModalOpen ? (
        <Login
          setLogin={logInDispatcher}
          isLoginOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
        />
      ) : null}
      {signUpModalOpen ? (
        <Signup
          isSignUpOpen={signUpModalOpen}
          setSignUpModalOpen={setSignUpModalOpen}
          setLogin={logInDispatcher}
        />
      ) : null}
      {myPageOpen ? <MyPage /> : null}
      {mainPageOpen ? <MainPage /> : null}
    </div>
  );
}

export default App;
