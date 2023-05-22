import React, { useState } from "react";

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";
import MyPage from "./components/MyPage";
import StartPage from "./components/StartPage";
import MainPage from "./components/MainPage";
import Map from "./components/Kakao";
import { locations } from "./data/locations";

function App() {
  const [login, setLogin] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [myPageOpen, setMyPageOpen] = useState(false);
  const [mainPageOpen, setMainPageOpen] = useState(false);
  // const [isAnythingOpen, setIsAnythingOpen] = useState(true);

  return (
    <div className="w-screen relative">
      <Header
        login={login}
        onLogout={setLogin}
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
        <Login isLoginOpen={loginModalOpen} onXClick={setLoginModalOpen} />
      ) : null}
      {signUpModalOpen ? (
        <Signup
          isSignUpOpen={signUpModalOpen}
          setSignUpModalOpen={setSignUpModalOpen}
          setLogin={setLogin}
        />
      ) : null}
      {myPageOpen ? <MyPage /> : null}
      {mainPageOpen ? <MainPage /> : null}
    </div>
  );
}

export default App;
