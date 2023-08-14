import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-400 flex min-h-screen items-center justify-center p-24">

      <div
        className='bg-white h-[400px] w-[600px] drop-shadow-5xl rounded text-black'
      >

        <div className='p-10'>

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


        </div>




      </div>


    </main>
  )
}
