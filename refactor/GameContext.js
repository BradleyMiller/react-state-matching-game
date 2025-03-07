import React from 'React';

const GameContext = React.createContext({
    numTiles: 36,
    playing: false,
    handleNumTileChange: () => { },
    startPlaying: () => { },
});

export default GameContext;