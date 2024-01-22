import { useState } from "react";

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

      <button onClick={handleGoodClicks}>good</button>
      <button onClick={handleNeutralClicks}>neutral</button>
      <button onClick={handleBadClicks}>bad</button>

      <h1>statistics</h1>
      <p>good {clicks.good}</p>
      <p>neutral {clicks.neutral}</p>
      <p>bad {clicks.bad}</p>
    </div>
  );
};

export default App;
