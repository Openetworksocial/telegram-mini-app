import { initUtils } from "@telegram-apps/sdk";
import React from "react";

const tele = window.Telegram?.WebApp;

const Finish = (props) => {
  const utils = initUtils();
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white h-screen font-poppins text-center px-4">
      <img
        src="/bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="flex flex-col flex-grow justify-center items-center z-10">
        <img src="/telegram.png" alt="telegram" className="h-28 mb-10" />

        <h1 className="text-3xl mb-4">You are a TON OG!</h1>
        <p className="text-gray-400 text-sm font-light">
          Thank you for joining us! We will notify you when we create a SocialFi
          platform based on this private network.
        </p>
        <div className="flex justify-between gap-4 w-2/3 mt-8">
          <div
            onClick={() => {
              console.log("Telegram icon clicked");
              tele.HapticFeedback.notificationOccurred("success");
              window.open("https://t.me/opennetworksocial", "_blank");
            }}
            className="flex justify-center items-center bg-white h-12 w-12 p-3 rounded-full cursor-pointer"
          >
            <img src="/tele.png" className="h-full w-full" />
          </div>
          <div
            onClick={() => {
              console.log("Twitter icon clicked");
              tele.HapticFeedback.notificationOccurred("success");
              window.open("https://x.com/opennetworkai", "_blank");
            }}
            className="flex justify-center items-center bg-white h-12 w-12 p-3.5 rounded-full cursor-pointer"
          >
            <img src="/twitter.png" className="h-full w-full" />
          </div>
          <div
            onClick={() => {
              console.log("Website icon clicked");
              tele.HapticFeedback.notificationOccurred("success");
              window.open("https://opennetwork.social", "_blank");
            }}
            className="flex justify-center items-center bg-white h-12 w-12 p-3 rounded-full cursor-pointer"
          >
            <img src="/website.png" className="h-full w-full" />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          console.log("Share button clicked");
          tele.HapticFeedback.notificationOccurred("success");
          utils.shareURL(
            "https://t.me/mybot/myapp",
            "Look! Some cool app here!"
          );
        }}
        className="bg-white text-black w-full mb-4 text-lg py-3 font-semibold rounded-full h-[55px] z-10"
      >
        Share with your friends!
      </button>
    </div>
  );
};

export default Finish;
