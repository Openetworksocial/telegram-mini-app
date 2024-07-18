import React, { useEffect, useState } from "react";
import Home from "./Home";
import Onboard from "./Onboard";
import Finish from "./Finish";

const tele = window.Telegram?.WebApp;

const Layout = (props) => {
  const [section, setSection] = useState(0);

  useEffect(() => {
    tele.CloudStorage.getItem("existingUser", (err, user) => {
      if (user) {
        setSection(2);
      }
    });
  }, []);

  const handleSection = (num) => {
    setSection(num);
  };
  return (
    <div>
      {section === 0 && <Home handleSection={handleSection} />}
      {section === 1 && <Onboard handleSection={handleSection} />}
      {section === 2 && <Finish handleSection={handleSection} />}
    </div>
  );
};

export default Layout;
