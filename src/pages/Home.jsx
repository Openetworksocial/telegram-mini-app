import React from "react";

const tele = window.Telegram?.WebApp;

const Home = ({ handleSection }) => {
  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden bg-black text-white h-screen w-screen font-poppins text-center px-4">
      <img
        src="/bg.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col flex-grow text-left justify-end items-end pb-8">
        <h1 className="text-3xl pr-5">
          Effortless collaboration with Open Network,
        </h1>
        <p className="mt-4 text-gray-400 text-sm font-light">
          Connecting founders, developers, creators, and designers on TON and
          Telegram for 900 million users.
        </p>
      </div>
      <button
        onClick={() => {
          tele.HapticFeedback.notificationOccurred("success");
          handleSection(1);
        }}
        className="relative z-10 bg-white text-black w-full mb-4 text-lg py-3 font-semibold rounded-full h-[55px]"
      >
        Join Us
      </button>
    </div>
  );
};

export default Home;
