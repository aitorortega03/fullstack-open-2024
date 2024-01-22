const Statistics = ({ clicks }) => {
  const calculateAverage = () => clicks.good * 1 + clicks.bad * -1;

  const calculateTotalComments = () =>
    clicks.good + clicks.neutral + clicks.bad;

    const calculatePositivePercentaje = () => {
        // clicks.good + clicks.neutral + clicks.bad === 0
        //   ? 0
        //   : clicks.good / calculateTotalComments()
        if (clicks.good + clicks.neutral + clicks.bad === 0) {
            return 0
        }
        if (calculateTotalComments() === clicks.good) {
            return 100
        }

        return clicks.good / calculateTotalComments()
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
