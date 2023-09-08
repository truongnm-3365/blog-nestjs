"use client"
import { Metadata } from 'next'
import Link from 'next/link'
import { useContext } from 'react'
import TodoContext from './context/TodoContext'

export const metadata: Metadata = {
  title: 'Trang chủ',
}




export default function Page() {
 const {state,dispatch} = useContext(TodoContext)
 console.log(state.todos);
 
  return <>
    <div>
      <Link href='/'>Trang chủ</Link>{' '}
      <Link href={'/todo'}>Todo</Link>
    </div>
  </>
}

