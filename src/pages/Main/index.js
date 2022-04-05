import React,{lazy,Suspense} from 'react'
import Leftnavigation from '../../components/Leftnavigation'
import Playbar from '../../components/Playbar'
import Head from '../../components/Head'
import { useRoutes } from 'react-router-dom'
import router from '../../router'
import { Appright } from './style'
lazy(()=>import('../Search'))

export default function Main() {
  const element = useRoutes(router)
  return (
    <div>
      
      <Leftnavigation/>
      <Appright>
      <Head/>
      <Suspense fallback={<h1>Loading.....</h1>}>
        {element}
      </Suspense>
      <Playbar/>
      </Appright>
    </div>
  )
}

