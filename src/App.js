import React from 'react';
import ListClass from './List' 
import './App.css'


function App(store) {
    return (
        <main className="App">
            <header className="App-header">
            <h1>Trelloyes!</h1>
            </header>
            <div class="App-list">
                <ListClass />
            </div>

        </main>
    );
}

export default App;