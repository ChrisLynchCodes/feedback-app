import { React, useState, useContext, useEffect } from 'react'
import { Card } from "./shared/Card";
import { Button } from "./shared/Button";
import { RatingSelect } from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext'

export const FeedbackForm = () => {

    const [text, setText] = useState('')
    const [rating, setRating] = useState('10')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {

        if(feedbackEdit.edit === true)
        {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (event) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length < 9) {
            setBtnDisabled(true)
            setMessage('Review must be at least 10 characters long')

        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text.trim().length >= 10) {
            const newFeedback = {
                text,
                rating
                // ^^shorthand for
                // text: text,
                // rating: rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else{
                addFeedback(newFeedback);
            }
           
           setText('');
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Please leave a review of your purchase</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" value={text} placeholder="Write a review" />
                    <Button type="submit" isDisabled={btnDisabled} >
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>

        </Card>
    )
}
