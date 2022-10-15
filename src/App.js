import "./App.scss";
import { fetchAPI } from "./api";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState({});
  const onClick = () => {
    const baseURL = `https://www.boredapi.com/api/`;
    const random = "activity/";
    fetchAPI(baseURL, random)
      .then((res) => setActivity(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Header here</h1>
      </header>

      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
