import React from 'react'
import { FeedbackItem } from './FeedbackItem'
import PropTypes from 'prop-types'


export const FeedbackList = ({feedback}) => {

    if(!feedback || feedback.length === 0 ){
        return <p>No Feedback Avalible</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />

            ))}

        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
     

}