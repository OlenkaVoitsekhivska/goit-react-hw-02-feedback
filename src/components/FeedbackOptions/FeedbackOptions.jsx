import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={style.box}>
      <button onClick={onLeaveFeedback} id={options[0]} className={style.good}>
        {options[0]}
      </button>
      <button
        onClick={onLeaveFeedback}
        id={options[1]}
        className={style.neutral}
      >
        {options[1]}
      </button>
      <button onClick={onLeaveFeedback} id={options[2]} className={style.bad}>
        {options[2]}
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
