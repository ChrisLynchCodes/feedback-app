import { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Great service',
            rating: 10
        },
        {
            id: 2,
            text: 'Slow delivery',
            rating: 2
        },
        {
            id: 3,
            text: 'Quality Product',
            rating: 8
        }]
    )

    const [feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit: false
        });


    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedItem} : item) )
    }

    //Set item to edit
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    const deleteFeedback = (id) => {

        //Return an array minus the element with the specififed id
        setFeedback(feedback.filter((item) => item.id !== id))

        //Removed - was annoying me
        // if (window.confirm('Are you sure you want to delete?')) {

        // }

    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //Remember state is immutable so copy needs to happen
        setFeedback([newFeedback, ...feedback])

    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext