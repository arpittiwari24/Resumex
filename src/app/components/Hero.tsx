 'use client'
 import {signIn} from "next-auth/react"
 
 export default function Hero() {
    return (
        <div className="hero py-20 text-white">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold ">Unlock Your Potential: AI-Powered Resumes for Your Success!</h1>
      <p className="py-6 pb-10 text-center px-20 text-lg">Experience the Future of Resume Generation: Leveraging Cutting-Edge AI Technology to Create Personalized, Professional, and Exceptional Resumes, Elevating Your Profile and Opening Doors to Career Excellence and Fulfillment.</p>
      <button onClick={() => signIn()} className="btn btn-info ">Get Started</button>
    </div>
  </div>
</div>
    )
 }