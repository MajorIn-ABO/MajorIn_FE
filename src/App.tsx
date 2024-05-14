import React from "react";
import RouterApp from "./router/RouterApp";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <RouterApp />
      </RecoilRoot>
    </div>
  );
}

export default App;
