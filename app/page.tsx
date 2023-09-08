import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trang chủ',
}




export default function Page() {
  
  return <>
    <div>
      <Link href='/'>Trang chủ</Link>{' '}
      <Link href={'/todo'}>Todo</Link>
    </div>
  </>
}

