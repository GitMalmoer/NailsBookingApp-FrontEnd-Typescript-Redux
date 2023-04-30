import React from 'react'

function MiniLoader({type = 'warning', scale = 100}) {
  return (
    <div className={`spinner-border text-${type}`} style={{scale:`${scale}%`}}></div>
  )
}

export default MiniLoader
