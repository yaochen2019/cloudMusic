import React from 'react'
import { PlaybarWarpper } from './style'
import { Slider } from 'antd'


export default function Playbar() {

  function onChange(value) {
    console.log('onChange: ', value);
  }
  
  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  }
  
  return (
    <PlaybarWarpper>
       <Slider   onChange={onChange} onAfterChange={onAfterChange}  defaultValue={30} disabled={false} />
    </PlaybarWarpper>
  )
}
