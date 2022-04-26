import React from 'react';
import { useEffect, useState } from "react"
import { Routes as Switch, useLocation } from "react-router-dom"
import TopBarProgress from "react-topbar-progress-indicator"
import { RouteProps } from 'react-router';
interface RouteSwitchType {
   children: RouteProps
}
export default function RouteSwitch(props: RouteSwitchType) {
   const children = props.children;
   const [progress, setProgress] = useState(false)
   const [prevLoc, setPrevLoc] = useState("")
   const location = useLocation()
   TopBarProgress.config({
      barColors: {
         "0": "#9427F7",
         "0.5": "#FF4477",
         "1.0": "#FFBB33",
      },
      shadowBlur: 5
   })
   useEffect(() => {
      setPrevLoc(location.pathname)
      setProgress(true)
      if (location.pathname === prevLoc) {
         setPrevLoc('')
         //thanks to ankit sahu
      }
   }, [location])

   useEffect(() => {
      setProgress(false)
      window.scrollTo({top: 0, behavior: 'smooth'})
   }, [prevLoc])

   return (
      <>
         {progress && <TopBarProgress />}
         <Switch>{children}</Switch>
      </>
   )
}