import StatisticLine from "./StatisticLine";

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
      <StatisticLine text={'good'} value={clicks.good}/>
      <StatisticLine text={'neutral'} value={clicks.neutral}/>
      <StatisticLine text={'bad'} value={clicks.bad}/>
      <StatisticLine text={'average'} value={calculateAverage()}/>
      <StatisticLine text={'positive'} value={calculatePositivePercentaje()}/>
    </div>
  );
};

export default Statistics;
