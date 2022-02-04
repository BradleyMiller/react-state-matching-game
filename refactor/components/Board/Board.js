import React from 'react'
import './Board.css';
import Tile from '../Tile'

const Board = (props) => {
  const boardTiles = props.tiles.map((tileProps) => (
    <Tile {...tileProps} />
  ))

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' style={gridConfig}>
      {boardTiles}
    </div>
  )
}

export default Board
