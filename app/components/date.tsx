"use client";

import { useEffect, useState } from "react";

const CurrentDateTime = () => {
  const [gmtTime, setGmtTime] = useState("");
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const gmtHours = String(now.getUTCHours()).padStart(2, "0");
      const gmtMinutes = String(now.getUTCMinutes()).padStart(2, "0");
      const gmtSeconds = String(now.getUTCSeconds()).padStart(2, "0");
      const gmtTimeString = `${gmtHours}:${gmtMinutes}:${gmtSeconds}`;
      setGmtTime(gmtTimeString);

      const istDate = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
      const istHours = String(istDate.getUTCHours()).padStart(2, "0");
      const istMinutes = String(istDate.getUTCMinutes()).padStart(2, "0");
      const istSeconds = String(istDate.getUTCSeconds()).padStart(2, "0");
      const istTimeString = `${istHours}:${istMinutes}:${istSeconds}`;
      setIstTime(istTimeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>
        {gmtTime} GMT / {istTime} IST
      </p>
    </div>
  );
};

export default CurrentDateTime;
