import { useState } from 'react'

function App() {
  const [colour,setcolour] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:colour}}
    >
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center 
         gap-3 shadow-lg bg-white px-3 py-2 
         rounded-3xl">
          <button onClick={() => setcolour("red")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button onClick={() => setcolour("green")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          >Green</button>
          <button onClick={() => setcolour("blue")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button onClick={() => setcolour("black")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}
          >Black</button>
          <button onClick={() => setcolour("gray")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"gray"}}
          >Gray</button>
          <button onClick={() => setcolour("yellow")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button onClick={() => setcolour("brown")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"brown"}}
          >Brown</button>
          <button onClick={() => setcolour("pink")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"pink"}}
          >Pink</button>
          <button onClick={() => setcolour("orange")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"orange"}}
          >Orange</button>
          <button onClick={() => setcolour("purple")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}
          >Purple</button>
         </div>
      </div>
    </div>
  )
}

export default App
