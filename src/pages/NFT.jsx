import {
  TonConnectButton,
  useTonAddress,
  useTonConnectModal,
} from "@tonconnect/ui-react";
import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const tele = window.Telegram?.WebApp;

const NFT = ({ handleSection }) => {
  const { state } = useTonConnectModal();
  const userFriendlyAddress = useTonAddress();

  const handleTonConnect = async () => {
    if (tele && userFriendlyAddress) {
      try {
        await tele.ready();
        const { user } = tele.initDataUnsafe || {};
        const form = new FormData();
        form.append("tonAddress", userFriendlyAddress);
        form.append("telegramId", user?.id);

        try {
          await axios.post(
            "https://script.google.com/macros/s/AKfycbzLJuWwq2gYZiVF3p1od9V9T2tnaboovnymzE6DmwAsd027B75YQz7dwjtl9Ft60XUO/exec",
            form
          );
          handleSection(3);

          //   toast.success(`Wallet Connected Successfully.`, {
          //     autoClose: 2000,
          //     hideProgressBar: true,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //     theme: "colored",
          //   });
        } catch (error) {
          toast.error(`There was problem connecting your wallet.`, {
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong please try again later.", {
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  useEffect(() => {
    if (state.status) {
      handleTonConnect();
    }
  }, [state.status]);

  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden bg-black text-white h-screen w-screen top-0 left-0 bottom-0 font-poppins text-center">
      <img
        src="/bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="flex flex-col h-full">
        <div className="flex flex-col h-full gap-5 w-full items-center justify-center z-10">
          <h1 className="text-3xl font-medium">Connect Wallet</h1>
          <TonConnectButton />
        </div>
        <div className="flex relative flex-col items-center justify-center text-black bg-white rounded-t-3xl w-full h-[75%] mt-auto p-4">
          <div className="w-full h-[55%]  flex justify-center">
            <img
              src="/nft.jpeg"
              alt="nft"
              className="max-w-[90%] max-h-full rounded-xl object-contain shadow-2xl"
            />
          </div>
          <span className="pt-10 text-sm px-4">
            Connect your wallet to receive the SBT NFT. You can connect it later
            too. This NFT will be required to access the SocialFi platform at
            launch.
          </span>
          <button
            onClick={() => {
              tele.HapticFeedback.notificationOccurred("success");
              handleSection(3);
            }}
            className="bg-black mt-4 z-10 flex justify-center items-center text-white w-fit text-lg py-2 px-8 font-semibold rounded-full h-[50px]"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFT;
