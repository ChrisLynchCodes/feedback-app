import React from 'react'
import PropTypes from 'prop-types'



export const Header = ({ text, bgcolour, textColour }) => {

    const headerStyles = {
        backgroundColor: bgcolour,
        color: textColour
    }

    return (

        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>

        </header>
    )
}

// ======Default Props & PropTypes======

Header.defaultProps = {
    text: "Reviews",
    bgcolour: "rgba(0,0,0,0.5)",
    textColour: "#E94B3CFF"
}
Header.propTypes = {
    text: PropTypes.string,
    bgcolour: PropTypes.string,
    textColour: PropTypes.string,
}
