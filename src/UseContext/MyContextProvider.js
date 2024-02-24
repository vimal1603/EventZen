import React from 'react'
import { useState } from 'react'
import MyContext from './MyContext';

const MyContextProvider = ({children}) => {
    const[bg,setBg]=useState('white');
  return (
   <div>
    
    <MyContext.Provider value={{bg,setBg}}>
    {children}
    </MyContext.Provider>
     </div>
  )
}

export default MyContextProvider
