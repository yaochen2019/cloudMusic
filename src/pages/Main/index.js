import React,{Suspense} from 'react'
import Leftnavigation from '../../components/Leftnavigation'
import Playbar from '../../components/Playbar'
import Head from '../../components/Head'
import { Appright } from './style'
import GetRoutes from '../../router'

export default function Main() {
  const element = GetRoutes()
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

