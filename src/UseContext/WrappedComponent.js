import React from 'react'
import MyContextProvider from './MyContextProvider'
import Home from '../Home/Home'

const WrappedComponent = () => {
  return (
    <MyContextProvider>
        <Home/>
        </MyContextProvider>
  )
}

export default WrappedComponent