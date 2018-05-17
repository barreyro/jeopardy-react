import React from 'react';
import ClueSquare from './ClueSquare';

const titleStyle = {
    fontSize: '48px',
    fontWeight: 180,
    fontFamily: 'Arial Narrow',
}

const ClueColumn = props => {
    return (
        <div>
            <div style={titleStyle} >  { props.category.title }</div>
            { props.category.clues.map( x => <ClueSquare key={x.id} clue={x}/>)}
        </div>
    )
};

export default ClueColumn;