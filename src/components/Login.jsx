import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import Input from "./Input";

const Login = ({ setLogin, isLoginOpen, setLoginModalOpen }) => {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const onXBtnClick = () => {
    setLoginModalOpen(!isLoginOpen);
  };

  const onLoginBtnClick = () => {
    if (!ID.includes("@g.skku.edu") && !ID.includes("@skku.edu")) {
      alert(
        "Your ID must contain @g.skku.edu or @skku.edu. Please enter a valid ID."
      );
      return;
    } else if (PW.length < 4) {
      alert(
        "Your PW must be longer than 4 characters. Please enter a valid PW."
      );
      return;
    }
    setLoginModalOpen(false);
    setLogin(true);
  };

  return (
    <>
      <div
        onClick={onXBtnClick}
        className="z-3 absolute top-0 right-[50%] translate-x-2/4 bg-black/[0.55] w-full h-full"
      ></div>
      <div className="z-5 fixed top-0 right-[50%] translate-x-2/4 translate-y-2/4 flex flex-col justify-center items-center bg-slate-200 w-[570px] h-[570px] rounded-3xl">
        <h3 className="text-4xl mb-10 pb-1 select-none border-b-4 border-solid border-[#00ff00]/[0.3]">
          Login
        </h3>
        <div>
          <Input
            kind="ID"
            type="email"
            placeholder="SKKU Account"
            onChange={setID}
          />
          <Input
            kind="PW"
            type="text"
            placeholder="SKKU Password"
            onChange={setPW}
          />
        </div>
        <button
          onClick={onLoginBtnClick}
          className="text-xl rounded-lg mt-5 bg-lime-500 px-4 py-2 hover:bg-lime-500/[0.6] duration-150"
        >
          Login
        </button>
        <button onClick={onXBtnClick}>
          <FontAwesomeIcon
            icon={faX}
            className="absolute top-7 right-7 text-2xl text-black/[0.8] cursor-pointer"
          />
        </button>
      </div>
    </>
  );
};

export default Login;
