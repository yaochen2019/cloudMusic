import React from 'react'
import Leftnavigation from '../../components/Leftnavigation'
import Playbar from '../../components/Playbar'
import Head from '../../components/Head'
import { useRoutes } from 'react-router-dom'
import router from '../../router'
export default function Main() {
  const element = useRoutes(router)
  return (
    <div>
      <Head/>
      <Leftnavigation/>
      <Playbar/>
      {element}
    </div>
  )
}

