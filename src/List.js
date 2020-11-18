import React from 'react';
import CardsClass from './Card';
import './List.css';

class ListClass extends React.Component {
    render() {
        return (
            <section class="List">
                <header class="List-header">
                <h2>First list</h2>
                </header>
                <div class="List-cards">
                    <CardsClass />
                </div>
            </section>
        )
    }
}

export default ListClass;