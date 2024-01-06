import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login'
import { createUseStyles } from 'react-jss'


const useStyle = createUseStyles({
  text : {
    color:'yellow'
  }
})
export default function Public() {
  const classes = useStyle()
  return (
    <h1 className={classes.text}>ijopsidjhcbjhpjo</h1>
  )
}
