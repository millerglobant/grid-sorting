import { useContext } from "react"
import AppContext from "../../context/AppContext"

const Navbar = () => {
  const {size, setSize} = useContext(AppContext)

  return (
    <nav className="bg-teal-300 boder-black px-10 py-3 flex flex-row justify-between">
      <h1 className="uppercase text-xl text-slate-700 font-bold">Grid sorting</h1>
      <div className="flex">
        <h2 className="mr-3">Please type number of row and cols</h2>
        <input 
          type="number"
          className="form-control block w-10 text-center rounded-md"
          value={size}
          min={0}
          max={10}
          onChange={(e)=>setSize(e.target.value)}
        />
      </div>
    </nav>
  )
}

export default Navbar