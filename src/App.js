import { Reset } from "styled-reset";
import React from "react";
import Main from "./page/Main";

export default function App() {
  return (
    <div>
      <React.Fragment>
        <Reset />
        <Main />
      </React.Fragment>
    </div>
  );
}
