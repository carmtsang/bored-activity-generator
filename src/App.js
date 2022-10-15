import "./App.scss";
import { fetchAPI } from "./api";
import { useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
  const [activity, setActivity] = useState({});
  const onClick = () => {
    const random = "activity/";
    fetchAPI(random)
      .then((res) => setActivity(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Activity Generator</h1>
      </header>

      <Button onClick={onClick}>Click Me</Button>

      <ul>
        <li>{activity.activity}</li>
        <li>Activity Type: {activity.type}</li>
        <li>{activity.participants}</li>
      </ul>
    </div>
  );
}

export default App;
