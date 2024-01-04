import React from "react";
import NormalGame from "../components/GameMode/NormalGame";
import { API_letter5 } from "../APIs/WordGen";

function Easy() {
  return (
    <>
      <NormalGame api={API_letter5} />
    </>
  );
}

export default Easy;
