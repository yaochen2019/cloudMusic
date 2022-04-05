import React from 'react'
import { CommentWarpper } from './style'
import { NavLink } from 'react-router-dom'
export default function Comment() {
  return (
    <CommentWarpper>
      <textarea className='textarea'>
      </textarea>
      <div className='textarea-btn' >
        <div className='btn-left' >
        <NavLink to=''  className={({isActive})=>isActive ? 'btnclick':'btnnoclick'}>@</NavLink>
        <NavLink to=''  className={({isActive})=>isActive ? 'btnclick':'btnnoclick'}>#</NavLink>
        </div>
        <NavLink to=''  className={({isActive})=>isActive ? 'commentclick':'commentnoclick'}>评论</NavLink>
      </div>
    </CommentWarpper>
  )
}
