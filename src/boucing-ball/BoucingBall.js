import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './BoucingBall.css';

function BoucingBall() {
    let board = [
        ["X", "X", "X", "X", "X", "X", "X"],
        ["X", "1", "0", "0", "0", "0", "X"],
        ["X", "0", "0", "0", "0", "0", "X"],
        ["X", "0", "0", "0", "0", "0", "X"],
        ["X", "0", "0", "0", "0", "0", "X"],
        ["X", "0", "0", "0", "0", "0", "X"],
        ["X", "0", "0", "0", "0", "0", "X"],
        ["X", "0", "0", "0", "0", "0", "X"],
        ["X", "0", "0", "0", "0", "0", "X"],
        ["X", "X", "X", "X", "X", "X", "X"],
    ];


    let gameBoard = () => {
        return (board.map((row, i) => (
            <div key={i}>
                {row.map((el, j) => (
                    <span key={j} className="spot">
                        {el === "X" ? <div className='blocked'>{el}</div>
                            : el === "1" ? <div className='ball'>{el}</div>
                                : "0"}
                    </span>
                ))}
            </div>)
        ))
    }
    let startPos = ball(board, "1");
    let [boardToDisplay, setBoardToDisplay] = useState(gameBoard());
    let [positionX, setPositionX] = useState(startPos.x);
    let [positionY, setPositionY] = useState(startPos.y);
    let [vectorX, setVectorX] = useState(1);
    let [vectorY, setVectorY] = useState(1);
    let [startState, setStartState] = useState(false);
    let [text, setText] = useState("")

    let moveBall = () => {
        board[startPos.y][startPos.x] = "0";
        setPositionX(positionX += vectorX);
        setPositionY(positionY += vectorY);
        board[positionY][positionX] = "1";
        setBoardToDisplay(gameBoard());
    }

    let checkForCollision = () => {
        if (board[positionY][positionX + vectorX] === 'X') {
            setVectorX(vectorX *= -1);
        };
        if (board[positionY + vectorY][positionX] === 'X') {
            setVectorY(vectorY *= -1);
        };

        moveBall();
    };

    let start = () => {
        setStartState(true);
        setText();
    }; 
    useEffect(() => {
        if (startState) {
            const interval = setInterval(() => {
                checkForCollision();
                if (positionX === startPos.x && positionY === startPos.y) {
                    setStartState(false);
                    clearInterval(interval);
                    setText('The ball is back on its starting position');
                }

            }, 100);

            return () => clearInterval(interval);
        }
    }, [boardToDisplay, startState]);


    return (
        <div className='App'>
            <Link to={'/'}>
                <KeyboardBackspaceIcon/>
            </Link> <br/><br/>
            <button onClick={() => start()}>Start!</button> <br/><br/>
            {text}
            {boardToDisplay}

        </div>
    );

}

let ball = (board, valuToFind) => {
    let index = [].concat.apply([], ([].concat.apply([], board))).indexOf(valuToFind);
    if (index === -1) { return false; }
    let numColumns = board[0].length;
    let y = parseInt(index / numColumns);
    let x = index % numColumns;
    return { y: y, x: x }
}

export default BoucingBall;
