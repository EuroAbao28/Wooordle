import React from "react";
import NormalGame from "../components/GameMode/NormalGame";
import { API_letter8 } from "../APIs/WordGen";

function Hard() {
  return (
    <div>
      <NormalGame api={API_letter8} />
    </div>
  );
}

export default Hard;
