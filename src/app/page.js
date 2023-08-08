"use client";
import SquaredButton from "./Components/SquaredButton";
import Display from "./Components/Display";
import {useState} from "react";

export default function Home() {
  const [display, setDisplay] = useState("0")
  
  function pressButton(numero) {
    console.info("pressButton", numero)
    if (numero === "AC") {
      setDisplay("0")
    } else if (numero !== "0" && display === "0") {
      setDisplay(`${display !== "0" ? display : ""}${numero}`)
    } else {
      setDisplay(`${display !== "0" ? display : ""}${numero}`)
    }
  }
  function calculate() {
    const result = eval(display)
    setDisplay(result)
  }

  function backspace() {
    if (display.length === 1) {
      setDisplay("0")
    } else {
      const rErase = String(display).slice(0, display.length - 1)
      setDisplay(Boolean(rErase) ? rErase : "0")
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-1 p-2 w-64 bg-red-600 rounded">  
       <Display text={display}/>
    

      <div className="flex flex-row space-x-1">
      <SquaredButton numero={"AC"} onClick={pressButton}/>
      <SquaredButton numero={"X"} onClick={pressButton}/>
      <SquaredButton numero={"%"} onClick={pressButton}/>
      <SquaredButton numero={"/"} onClick={pressButton}/>
      </div>
      <div className="flex flex-row space-x-1">
      <SquaredButton numero={7} onClick={pressButton}/>
      <SquaredButton numero={8} onClick={pressButton}/>
      <SquaredButton numero={9} onClick={pressButton}/>
      <SquaredButton numero={"X"} onClick={pressButton}/>
      </div>
      <div className="flex flex-row space-x-1">
      <SquaredButton numero={4} onClick={pressButton}/>
      <SquaredButton numero={5} onClick={pressButton}/>
      <SquaredButton numero={6} onClick={pressButton}/>
      <SquaredButton numero={"-"} onClick={pressButton}/>
      </div>
      <div className="flex flex-row space-x-1">
      <SquaredButton numero={1} onClick={pressButton}/>
      <SquaredButton numero={2} onClick={pressButton}/>
      <SquaredButton numero={3} onClick={pressButton}/>
      <SquaredButton numero={"+"} onClick={pressButton}/>
      </div>
      <div className="flex flex-row space-x-1">
      <SquaredButton numero={""} onClick={pressButton}/>
      <SquaredButton numero={0} onClick={pressButton}/>
      <SquaredButton numero={","} onClick={pressButton}/>
      <SquaredButton numero={"="} onClick={pressButton}/>
      </div>  
      </div>

      

    </main>
  )
}
