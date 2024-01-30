import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClicks = () =>
    setClicks({ ...clicks, good: clicks.good + 1 });

  const handleNeutralClicks = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });

  const handleBadClicks = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGoodClicks} text={'good'}/>
      <Button handleClick={handleNeutralClicks} text={'neutral'}/>
      <Button handleClick={handleBadClicks} text={'bad'}/>

      <Statistics clicks={clicks}/>
    </div>
  );
};

export default App;
