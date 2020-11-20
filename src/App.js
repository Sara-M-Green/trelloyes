import React, { Component } from 'react';
import ListClass from './List' 
import './App.css'
import STORE from './store'

const newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
}

function omit(obj, keyToOmit) {
    let {[keyToOmit]: _, ...rest} = obj;
    return rest;
}

class App extends Component {
    state = {
        store: STORE
    }

    handleDelete = (cardId) => {
        console.log('handle delete function called')
        const { lists, allCards } = this.state.store;

        const newLists = lists.map(list => ({
            ...list,
            cardIds: list.cardIds.filter(id => id !== cardId)
        }));

        const newCards = omit(allCards, cardId);

        this.setState({
            store: {
                lists: newLists,
                allCards: newCards
            }
        })
    }

    handleNewCard = (listId) => {
        console.log('handle new card function called')

        const newCard = newRandomCard()

        const newLists = this.state.store.lists.map(list => {
            if (list.id === listId) {
                return {
                    ...list,
                    cardIds: [...list.cardIds, newCard.id]
                };
            }
            return list;
        })

        this.setState({
            store: {
                lists: newLists,
                allCards: {
                    ...this.state.store.allCards,
                    [newCard.id]: newCard
                }
            }
        })
    }

    render() {
        return (
            <main className="App">
                <header className="App-header">
                <h1>Trelloyes!</h1>
                </header>
                <div className="App-list">
                    {this.state.store.lists.map(list => (
                        <ListClass 
                            key={list.id}
                            id={list.id}
                            header={list.header}
                            cards={list.cardIds.map(id => this.state.store.allCards[id])}
                            onDelete={this.handleDelete}
                            onNewCard={this.handleNewCard}
                        />
                    )) }      
                </div>
            </main>
        );
    }
}

export default App;