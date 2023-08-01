import SquaredButton from "./Components/SquaredButton";
import Display from "./Components/Display";
import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState (initialState:"0")

  function pressButton(numero) {
    console.info 
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='space-y-1 p-2 w-64 bg-red-600 rounded'>  
       <Display />
    

      <div className="flex flex-row space-x-1">
      <SquaredButton numero={"AC"}/>
      <SquaredButton numero={"X"}/>
      <SquaredButton numero={"%"}/>
      <SquaredButton numero={"/"}/>
      </div>
      <div className="flex flex-row space-x-1">
      <SquaredButton numero={7}/>
      <SquaredButton numero={8}/>
      <SquaredButton numero={9}/>
      <SquaredButton numero={"X"}/>
      </div>
      <div className="flex flex-row space-x-1">
      <SquaredButton numero={4}/>
      <SquaredButton numero={5}/>
      <SquaredButton numero={6}/>
      <SquaredButton numero={"-"}/>
      </div>
      <div className="flex flex-row space-x-1">
      <SquaredButton numero={1}/>
      <SquaredButton numero={2}/>
      <SquaredButton numero={3}/>
      <SquaredButton numero={"+"}/>
      </div>
      <div className="flex flex-row space-x-1">
      <SquaredButton numero={""}/>
      <SquaredButton numero={0}/>
      <SquaredButton numero={","}/>
      <SquaredButton numero={"="}/>
      </div>  
      </div>

      

    </main>
  )
}
