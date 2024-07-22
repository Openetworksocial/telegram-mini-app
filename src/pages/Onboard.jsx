import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const tele = window.Telegram?.WebApp;

const Onboard = ({ handleSection }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedIn: "",
    twitter: "",
  });
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    tele.HapticFeedback.notificationOccurred("success");

    if (
      !formData.name ||
      formData.name === "" ||
      !formData.email ||
      formData.email === "" ||
      !role ||
      role === ""
    ) {
      toast.error("Please fill all required values", {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    const userData = {
      ...formData,
      role: role,
    };

    const form = new FormData();
    for (const key in userData) {
      form.append(key, userData[key]);
    }

    if (tele) {
      try {
        await tele.ready();
        const { user } = tele.initDataUnsafe || {};

        const userData = {
          ...formData,
          telegramName: user.first_name + user.last_name,
          telegramUsername: user.username,
          premiumUser: user.premiumUser ? "Yes" : "No",
          role: role,
          date: new Date(),
        };

        const form = new FormData();
        for (const key in userData) {
          form.append(key, userData[key]);
        }

        try {
          await axios.post(
            "https://script.google.com/macros/s/AKfycbx9U2zAywKquvj2RHbik7j4SKsSEKLt-JYz-V8s0fRh85BO2t-G85vAYhmfoMqmtkG_/exec",
            form
          );
          handleSection(2);
          tele.CloudStorage.setItem("existingUser", user.id);
        } catch (error) {
          console.log(error);
          toast.error(`Something went wrong please try again later.`, {
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
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex overflow-auto flex-col justify-center items-center bg-black text-white h-screen font-poppins text-center px-4">
      <img
        src="/bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="flex z-10 pt-10 flex-col flex-grow w-full text-left justify-center">
        <h1 className="text-3xl mb-8 text-left w-full">
          Get Onboarded with Open Network
        </h1>
        <label htmlFor="name" className="text-sm">
          Your Name*
        </label>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          className="h-14 px-3 py-1 mt-1 mb-2 rounded-lg w-full border border-gray-500 bg-black"
        />
        <label htmlFor="name" className="text-sm">
          Email*
        </label>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
          className="h-14 px-3 py-1 mt-1 mb-2 rounded-lg w-full border border-gray-500 bg-black"
        />
        <label htmlFor="role" className="text-sm">
          Select Role*
        </label>
        <select
          name="role"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          className="custom-select h-14 px-3 py-1 mt-1 mb-2 rounded-lg w-full border border-gray-500 bg-black"
        >
          <option value="">Select</option>
          <option value="Founder">Founder</option>
          <option value="Developer">Developer</option>
          <option value="Influencer">Influencer</option>
          <option value="Marketing Team">Marketing Team</option>
          <option value="Content Team">Content Team</option>
          <option value="Design Team">Design Team</option>
          <option value="Finance Team">Finance Team</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="twitter" className="text-sm">
          Twitter
        </label>
        <input
          type="text"
          placeholder="Username"
          name="twitter"
          value={formData.twitter}
          onChange={handleInputChange}
          className="h-14 px-3 py-1 mt-1 mb-2 rounded-lg w-full border border-gray-500 bg-black"
        />
        <label htmlFor="linkedin" className="text-sm">
          LinkedIn
        </label>
        <input
          type="text"
          placeholder="URL"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={handleInputChange}
          className="h-14 px-3 py-1 mt-1 mb-2 rounded-lg w-full border border-gray-500 bg-black"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="bg-white mt-4 z-10 flex justify-center text-black w-full mb-4 text-lg py-3 font-semibold rounded-full h-[55px]"
      >
        {isLoading ? (
          <>
            <img src="/load.gif" alt="load" className="h-8 w-8" />
          </>
        ) : (
          <>Submit</>
        )}
      </button>
    </div>
  );
};

export default Onboard;
