import React from 'react'
import { ShowsongWarpper } from './style'
import InfiniteListExample from '../../../components/InfiniteListExample'
import { useParams } from 'react-router'
export default function Showsong(props) {
  const {searchkeywords} = useParams()
  console.log("search",searchkeywords);
  

  return (
    <ShowsongWarpper>
        <InfiniteListExample searchkeywords={searchkeywords}/>
    </ShowsongWarpper>
  )
}
