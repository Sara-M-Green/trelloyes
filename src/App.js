import React, { Component } from 'react';
import ListClass from './List' 
import './App.css'

class App extends Component {
    static defaultProps = {
        store: {
            lists: [],
            allCards: {},
        }
    };

    render() {
        const { store } = this.props
        return (
            <main className="App">
                <header className="App-header">
                <h1>Trelloyes!</h1>
                </header>
                <div class="App-list">
                    {store.lists.map(list => (
                        <ListClass 
                            key={list.id}
                            header={list.header}
                            cards={list.cardIds.map(id => store.allCards[id])}
                        />
                    ))}            
                </div>
            </main>
        );
    }
}

export default App;