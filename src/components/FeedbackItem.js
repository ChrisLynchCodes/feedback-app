import {React} from 'react'
import {Card} from './shared/Card'
import PropTypes from 'prop-types'


export const FeedbackItem = ({item}) => {
    //Access prev state on a button click
    // const handleClick = () =>{
    //     setRating((prev) => {
    //         return prev+1;
    //     });
    // }

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
          
        </Card>
    )
}



FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
    

}