import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/button";
import { fetchExcuses, generateExcuse } from "../store/excusesSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const currentExcuse = useSelector((state) => state.excuses.currentExcuse);
  const status = useSelector((state) => state.excuses.status);
  const error = useSelector((state) => state.excuses.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchExcuses());
    }
  }, [status, dispatch]);

  const handleGenerateExcuse = () => {
    dispatch(generateExcuse());
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Les excuses de dev</h1>
      {status === "loading" && <p>Chargement...</p>}
      {error && <p>Error: {error}</p>}
      {currentExcuse && <p>{currentExcuse.message}</p>}
      <Button onClick={handleGenerateExcuse} />
    </div>
  );
};

export default MainPage;
