const Statistics = ({ clicks }) => {

  const calculateAverage = () => clicks.good * 1 + clicks.bad * -1;

  const calculateTotalComments = () =>
    clicks.good + clicks.neutral + clicks.bad;

    const calculatePositivePercentaje = () => {
        if (clicks.good + clicks.neutral + clicks.bad === 0) {
            return 0
        }
        if (calculateTotalComments() === clicks.good) {
            return 100
        }

        return clicks.good / calculateTotalComments()
    }

    if (clicks.good === 0 && clicks.neutral === 0 && clicks.bad === 0) {
      return (
        <div>
          <p>No feedback given</p>
        </div>
      )
    }

  return (
    <div>
      <h1>statistics</h1>
      <p>good {clicks.good}</p>
      <p>neutral {clicks.neutral}</p>
      <p>bad {clicks.bad}</p>
      <p>average {calculateAverage()}</p>
      <p>positive {calculatePositivePercentaje()} %</p>
    </div>
  );
};

export default Statistics;
