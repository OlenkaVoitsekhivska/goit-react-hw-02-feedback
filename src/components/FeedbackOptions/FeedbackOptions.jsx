import style from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={style.box}>
      <button onClick={onLeaveFeedback} id="good" className={style.good}>
        Good
      </button>
      <button onClick={onLeaveFeedback} id="neutral" className={style.neutral}>
        Neutral
      </button>
      <button onClick={onLeaveFeedback} id="bad" className={style.bad}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
