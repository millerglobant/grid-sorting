import { useContext, useState } from "react"
import AppContext from "../../context/AppContext"

import Row from "../shared/Row"
import Header from "../shared/Header"

const Main = () => {
  const {size} = useContext(AppContext)


  return (
    <div className="flex-1 p-10 ">
      <Row columns={size}>
       {
        Array.apply(null, { length: size }).map((e, i) => (
          <Header number={i+1} key={`header ${i}`}/>
        ))
       }
      </Row>
    </div>
  )
}

export default Main