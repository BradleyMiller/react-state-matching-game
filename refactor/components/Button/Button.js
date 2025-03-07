import React from 'react';
import './Button.css';
import GameContext from '../../GameContext';

//const Button = (props) => (<button onClick={props.startGame}>{props.playing ? 'reset' : 'start'}</button>)
const Button = (props) => (
    <GameContext.Consumer>
        {
            ({ playing, startGame }) =>
                <button onClick={startGame}>{playing ? 'reset' : 'start'}</button>
        }
    </GameContext.Consumer>
)

export default Button
