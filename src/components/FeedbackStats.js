import {React, useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'



export const FeedbackStats = () => {

    const {feedback} = useContext(FeedbackContext)
    //Caclulate ratings average
    //High order Array method reduce takes in 2 params 
    //a function with 2 params accumulator and currentValue (acc, curr)
    //and a  default for the acc (0)

    let average = feedback.reduce((acc, cur ) => {
        return acc + cur.rating

    }, 0) / feedback.length;

    //Make average 1 decimal place & remove trailing .0 in whole nums
    average = average.toFixed(1).replace(/[.,]0$/, '');
   
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}


//No longer needed - left for reference

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired


// }