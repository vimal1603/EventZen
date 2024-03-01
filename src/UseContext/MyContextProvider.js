
import React from 'react'
import { useState } from 'react'
import MyContext from './MyContext';

const MyContextProvider = ({children}) => {
    const[login,setLogin]=useState(false);
    const log = () =>
    {
      setLogin(true);
    }
    const logout = () =>
    {
      setLogin(false);
    }
  return (
   <div>
    
    <MyContext.Provider value={{login,setLogin,log,logout}}>
    {children}
    </MyContext.Provider>
     </div>
  )
}

export default MyContextProvider

