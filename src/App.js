import "./App.css";

import Welcome from "./Welcome";
function App() {
  return (
    <div>
      <p>Hello world!</p>
      <Welcome name="Rakhmonali" />
      <Welcome name="Alisher" />
      <Welcome name="Arslan" />
      <Welcome name="Aziz" />
      <h2>
        Current time:{" "}
        {new Date().toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h2>
    </div>
  );
}

export default App;
