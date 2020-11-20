import React from 'react';
import './Card.css';


class CardsClass extends React.Component {
    render() {
        return (
            <div className='Card'>
                <button
                    type="button"
                    onClick={() => this.props.onDelete(this.props.id)}
                >
                    delete
                </button>
                <h3 className='Card-title'>{this.props.title}</h3>
                <p className='Card-content'>{this.props.content}</p>
            </div>
        )
    }      
}

CardsClass.defaultProps = {
    onDelete: () => {}
}


export default CardsClass;