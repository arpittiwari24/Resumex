'use client'

import { useSession } from "next-auth/react"
import Hero from './components/Hero'

export default function Home() {
  const {data: session} = useSession()
  
  if(session && session.user){
    return(
      <div>
        <h1 className="text-4xl">Welcome {session.user.name}</h1>
      </div>
    )
  }
  return (
    <div>
      <Hero />
    </div>
  )
}
