import React from 'react'

import './Tile.css'


const Tile = ({ selected, matched, color, svg }) => {

  const tileColor = { backgroundColor: selected || matched ? color : null };

  //const TileIcon = matched || selected ? svg : null;
  const TileIcon = svg;

  //const tileColor = 'red'
  return (
    // <div className='Tile' style={{ backgroundColor: tileColor.backgroundColor }}>
    <div className='Tile' style={selected || matched ? { backgroundColor: color } : null}>
      {
        matched || selected
          ? <TileIcon />
          : null
      }
    </div>
  )
}

export default Tile
