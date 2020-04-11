import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import TetrisBoard from './tetris/board';

function App() {
    return (
        <Router>
        <div className="container">
            <Route path="/" exact component={TetrisBoard}/>
        </div>
        </Router>
    )
}

export default App;