import React from "react";
import ReactDOM from "react-dom";
import { invoke } from "@tauri-apps/api/tauri";

const App = () => {
  const handleClick = async () => {
    const greeting = await invoke("greet", { name: "Dan" });
    window.alert(greeting);
  };

  return (
    <React.Fragment>
      <h1>Hello, world!</h1>
      <button onClick={handleClick}>Click Me!</button>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
