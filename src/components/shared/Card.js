import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({children, reverse}) => {
    return (
    //     if reverse is true apply it 
    //    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    
    <div className="card" 
    style={{
        backgroundColor: reverse ? 'rgba(0,0,0, 0.4)' : '#fff',
        color: reverse ? '#fff' :  '#000'
    
    
    }}>
        {children}
    </div>
    
    )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool

}