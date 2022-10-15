import "./App.scss";
import { fetchAPI } from "./api";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Activity from "./components/Activity";

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

      <Button onClick={onClick}>Find Activity</Button>
      <Activity
        activity={activity.activity}
        type={activity.type}
        participants={activity.participants}
      />
    </div>
  );
}

export default App;
