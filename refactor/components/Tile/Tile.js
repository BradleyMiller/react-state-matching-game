import React from 'react'

import './Tile.css'


const Tile = (props) => {

  return (
    <div onClick={() => props.handleTileClicked(props.id, props.color)} className='Tile' style={props.selected || props.matched ? { backgroundColor: props.color } : null}>
      {
        props.matched || props.selected
          ? <props.svg />
          : null
      }
    </div>
  )
}

export default Tile
