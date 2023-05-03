import React from 'react'
import accessdenied from "../../Assets/accessdenied.svg"

function AccessDenied() {
  return (
    <div className='row'>
        <div className='col-12 col-md-6 offset-md-3'  style={{height:"70%"}}>
        <h1 className='text-center'>Access Denied</h1>
            <img src={accessdenied} alt="" style={{ width:"100%"}} />
            </div>
        </div>

  )
}

export default AccessDenied