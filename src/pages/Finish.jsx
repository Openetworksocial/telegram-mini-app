import { initUtils } from "@telegram-apps/sdk";
import React from "react";

const tele = window.Telegram?.WebApp;

const Finish = (props) => {
  const utils = initUtils();
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white h-screen font-roboto text-center px-4">
      <div className="flex flex-col flex-grow justify-center items-center">
        <h1 className="text-3xl font-semibold mb-4">You are a TON OG!</h1>
        <p>
          Thank you for joining us! We will notify you when we create a SocialFi
          platform based on this private network.
        </p>
      </div>
      <button
        onClick={() => {
          tele.HapticFeedback.notificationOccurred("success");
          utils.shareURL(
            "https://t.me/mybot/myapp",
            "Look! Some cool app here!"
          );
        }}
        className="bg-white text-black w-full mb-4 text-lg py-3 font-medium rounded-lg  h-[55px]"
      >
        Share with your friends!
      </button>
    </div>
  );
};

export default Finish;
