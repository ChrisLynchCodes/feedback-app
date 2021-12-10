import React from 'react'
import spinner from '../Assets/spinner.gif'

export const Spinner = () => {
    return (
        <image src={spinner} alt='Loading...'
            style={{
                width: "100px",
                margin: "auto",
                display: "block"
            }} />
    )
}
