
import React from 'react'
import { createUseStyles } from 'react-jss'
import { useNavigate } from 'react-router-dom'

const useStyle = createUseStyles({
  myText : {
    color:'red'
  }
})
export default function Login() {
  const navigate = useNavigate()
  const classes = useStyle()
  return (
    <div className={classes.myText} onClick={ ()=> navigate('/Dashboard')}>login</div>
  )
}
