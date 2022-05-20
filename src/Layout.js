import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Auth = ()=>{
  let adminDetail = JSON.parse(sessionStorage.getItem('adminDetails'))
return adminDetail
}
export const Layout = () => {
const isAuth = Auth()
  return isAuth ? <Outlet/> : <Navigate to="/signup"/>
  
}
