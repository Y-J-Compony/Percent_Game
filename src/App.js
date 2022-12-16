import Game from "./Page/Game";
import { Reset } from "styled-reset";
import React from "react";
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
