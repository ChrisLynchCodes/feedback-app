import { FaTimes, FaEdit } from 'react-icons/fa'
import { React, useContext } from 'react'
import { Card } from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'


export const FeedbackItem = ({ item }) => {
    //Access prev state on a button click (just for example)
    // const handleClick = () =>{
    //     setRating((prev) => {
    //         return prev+1;
    //     });
    // }


    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)


 


    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="red" />
            </button>
            <button className='edit' onClick={() => editFeedback(item)}>
                <FaEdit color='grey'/>
            </button>
            <div className="text-display">{item.text}</div>

        </Card>
    )
}



FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired


}