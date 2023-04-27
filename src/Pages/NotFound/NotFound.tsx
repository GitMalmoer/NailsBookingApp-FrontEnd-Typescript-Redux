import React from 'react'
import notfound from "../../Assets/notfound1.svg"

function NotFound() {
  return (
    <div className='row'>
        <div className='col-12 col-md-6 offset-md-3'  style={{height:"70%"}}>
        <h1 className='text-center'>Site not found</h1>
            <img src={notfound} alt="" style={{ width:"100%"}} />
            </div>
        </div>

  )
}

export default NotFound