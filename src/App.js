import { Reset } from "styled-reset";
import React from "react";
import Game from "./page/Game";

export default function App() {
  return (
    <div>
      <React.Fragment>
        <Reset />
        <Game />
      </React.Fragment>
    </div>
  );
}
