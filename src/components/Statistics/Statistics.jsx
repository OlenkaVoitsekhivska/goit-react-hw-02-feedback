function Statistics({good, neutral, bad, total, positivePercentage}) {
  return (
    <>
  
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {good === 0 ? 0 : positivePercentage}%</li>
      </ul>
    </>
  );
}

export default Statistics;
