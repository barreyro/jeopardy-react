import React from 'react';
import './ClueSquare.css';

const ClueSquare = props => {
    return (
        <div className="ClueSquare"> { props.clue.value } </div>
    )
}

export default ClueSquare;