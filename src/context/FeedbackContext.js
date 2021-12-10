import { useState, createContext, useEffect } from 'react'


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit: false
        });

    useEffect(() => {
        fetchFeedback()
    }, []);

    //Fetch feedback
    const fetchFeedback = async () => {

        const response = await fetch("/feedback?_sort=id&_order=asc")
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }
    const updateFeedback = async (id, updatedItem) => {
        
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })

        const data = await response.json();

        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))
    }

    //Set item to edit
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    const deleteFeedback = async (id) => {

        await fetch(`/feedback/${id}`,
        {
            method: 'DELETE'
           

        } 
        )

        //Return an array minus the element with the specififed id
        setFeedback(feedback.filter((item) => item.id !== id))

        //Removed - was annoying me
        // if (window.confirm('Are you sure you want to delete?')) {

        // }

    }

  
    // Add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()
        // newFeedback.id = uuidv4() --- Removed json server creates ids
        //Remember state is immutable so copy needs to happen
        setFeedback([data, ...feedback])
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
                isLoading
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext