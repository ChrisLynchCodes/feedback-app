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
    text: "Feedback Header",
    bgcolour: "rgba(0,0,0,0.4)",
    textColour: "#ff6a95"
}
Header.propTypes = {
    text: PropTypes.string,
    bgcolour: PropTypes.string,
    textColour: PropTypes.string,
}
