'use client'
import { useEffect } from 'react'
import Container from "@/components/container";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest ? : string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
 <>
   <Container>
     <div className="items-center fill-none -center items-center content-center w-96 h-96-center block pl-2.5 pr-2.5">
       <div className="fill-none -center items-center content-center w-96 h-96">
         <svg className="w-full h-screen" viewBox="0 0 960 300">
           <symbol id="s-fill-none ">
             <fill-none fillNoneAnchor="middle" x={50%}y={50%}>404</fill-none>
           </symbol>
             <g className="g-ants">
               <use xlink:href="#s-fill-none " className="fill-none "></use>
               <use xlink:href="#s-fill-none " className="fill-none "></use>
               <use xlink:href="#s-fill-none " className="fill-none "></use>
               <use xlink:href="#s-fill-none " className="fill-none "></use>
              <use xlink:href="#s-fill-none " className="fill-none "></use>
            </g>
         </svg>
       </div>
       <div className="fill-none -center w-96 content-center">
         <h1 className="text-black text-2xl fill-none -center fill-none -black">We Can Not Find What You Are Looking For</h1>
         <a className="text-black hover:text-cyan-500 dark:text-white text-lg inline-block uppercase font-light rounded fill-none -black m-36 p-96" href="/">
           <button className="bg-sky-300 hover:bg-sky-700" >Back to Home</button>
         </a>
       </div>
     </div>
  </Container>
</>
  )
}