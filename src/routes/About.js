import React from 'react'
import {Card} from '../components/shared/Card'
import { Link } from "react-router-dom";

export const About = () => {
    return (
        
        <Card>
            <div className='about'>
                <h1>About</h1>
                <p>Feedback app by Chris Lynch 2022</p>
                <Link to='/'>
                <p>Back to the app</p>
                </Link>
               
            </div>
            
        </Card>
    )
}
