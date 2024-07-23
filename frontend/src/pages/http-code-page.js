import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchExcuses } from "../store/excusesSlice";

const HttpCodePage = () => {
  const { httpCode } = useParams();

  const dispatch = useDispatch();
  const status = useSelector((state) => state.excuses.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchExcuses());
    }
  }, [status, dispatch]);

  const excuses = useSelector((state) => state.excuses.list);
  const excuseFound = excuses.find((e) => e.http_code === parseInt(httpCode));

  if (status === "idle" || status === "loading" || status === "failed") {
    return null;
  }

  if (!excuseFound) {
    return "Code HTTP inconnu";
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{excuseFound.message}</h1>
    </div>
  );
};

export default HttpCodePage;
