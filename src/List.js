import React from 'react';
import CardsClass from './Card';
import './List.css';

class ListClass extends React.Component {
    render() {
        return (
            <section className="List">
                <header className="List-header">
                <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {this.props.cards.map((card) => 
                        <CardsClass
                            key={card.id}
                            title={card.title}
                            content={card.content}
                        />
                    )}
                    <button
                        type="button"
                        className="List-add-button"    
                    >
                        + Add Random Card
                    </button>
                </div>
            </section>
        )
    }
}

export default ListClass;