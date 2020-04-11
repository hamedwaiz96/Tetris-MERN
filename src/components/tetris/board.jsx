import React from 'react';

class Board extends React.Component {
    render() {
        return(
            <ul className="tetris-board">
                {this.createBoard()}
            </ul>
        )
    }

    createBoard() {
        let board = []
        for (let i = 0; i <= 19; i++) {
            let col = [];
            for (let j = 0; j <= 9; j++) {
                col.push(<li key={j} className="tetris-col-p"></li>);
            }
            board.push(<li key={i} className="tetris-row"><ul className="tetris-col">{col}</ul></li>)
        }
        return board;
    }
};

export default Board;