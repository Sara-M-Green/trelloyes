import React from 'react';
import './Card.css';
import List from './List'

class CardsClass extends React.Component {
    render() {
        return (
            <div className='Card'>
                <button type='button'>delete</button>
                <h3 className='Card-title'>Card Title 1</h3>
                <p className='Card-content'>Content for card title 1 blah blah blah</p>
            </div>
        )
    }  
}

export default CardsClass;