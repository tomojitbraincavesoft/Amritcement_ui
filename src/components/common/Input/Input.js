import React from 'react'


export default function Input({username, placeholder, type}) {
  return (
    <div>
    <div className="login-btn">
    <div className="my-5">
        {/* <label htmlFor="">{username}</label> */}
        <input type={type} className='form-control' placeholder={placeholder} />
        
     </div>
    </div>

     
    </div>
  )
}
