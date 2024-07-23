import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import lostGif from "../assets/lost.webp";

const LostPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>I'm lost</h1>
      <img src={lostGif} alt="Lost Gif" />
    </div>
  );
};

export default LostPage;
