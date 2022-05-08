function FeedbackOptions ({onLeaveFeedback}){
    return (
      <div>   
        <button onClick={onLeaveFeedback} id ='good'>
          Good
        </button>
        <button onClick={onLeaveFeedback} id = 'neutral'>
          Neutral
        </button>
        <button onClick={onLeaveFeedback} id = 'bad'>
          Bad
        </button>
        </div>
    )
}

export default FeedbackOptions;