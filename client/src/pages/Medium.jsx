import "./gameStyle.css";
import NormalGame from "../components/GameMode/NormalGame";
import { API_letter6 } from "../APIs/WordGen";

function Medium() {
  return (
    <>
      <NormalGame api={API_letter6} />
    </>
  );
}

export default Medium;
