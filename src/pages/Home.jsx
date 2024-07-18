import React from "react";

const tele = window.Telegram?.WebApp;

const Home = ({ handleSection }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white h-screen font-roboto text-center px-4">
      <div className="flex flex-col flex-grow justify-center items-center">
        <h1 className="text-4xl font-bold">Open Network</h1>
        <p className="mt-4 text-gray-400 text-base font-light">
          We are a network of founders, developers, creators, and designers on
          TON and Telegram, shaping the future for 900 million users.
        </p>
      </div>
      <button
        onClick={() => {
          tele.HapticFeedback.notificationOccurred("success");
          handleSection(1);
        }}
        className="bg-white text-black w-full mb-4 text-lg py-3 font-medium rounded-lg  h-[55px]"
      >
        Join Us
      </button>
    </div>
  );
};

export default Home;
