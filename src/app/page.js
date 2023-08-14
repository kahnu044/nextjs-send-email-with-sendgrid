"use client"; // This is a client component

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  const handleSubmitEmail = () => {

    // Email Validation
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!regex.test(String(email).toLowerCase())) {
      setError(true)
      setErrorMsg('Invalid Email')
      return;
    }
    setError(false);
    //Sendgrid API calling here



  }

  return (
    <main className="bg-gray-400 flex min-h-screen items-center justify-center p-24">

      <div className='bg-white h-[400px] w-[600px] drop-shadow-5xl rounded text-black'>

        <div className='p-6'>

          <div >
            <Image
              // loader={myLoader}
              src="/email-sent.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>

          <div className='text-center'>
            <p className='text-[#4047f7] text-2xl'> Subscribe To our Newsletter!</p>
            <p className='text-gray-400 text-sm'> it's a good time to subscribe and get the latest promotions.</p>
          </div>

          <div className='text-center mt-4'>
            <input
              type='text'
              value={email}
              className='border p-2'
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className='bg-orange-400 p-2 text-white mt-4 md:mt-0'
              onClick={handleSubmitEmail}
            >Yes Please </button>
          </div>


          {error && errorMsg ? (
            <>
              <p className='text-center text-red-500 mt-2'>{errorMsg}</p>
            </>
          ) : ''}

        </div>
      </div>
    </main>
  )
}
