import React, { useState } from 'react'
import Authocontext from './Authocontext'

const AuthState = (props) => {
  let userValues = JSON.parse(localStorage.getItem('login'));
    const [user,setuser]=useState({
        email:userValues?userValues.email:"",
       login:userValues?true:false

    })
  return (
    <div>
      <Authocontext.Provider value={{user,setuser}}>
      {props.children}
      </Authocontext.Provider>
    </div>
  )
}

export default AuthState