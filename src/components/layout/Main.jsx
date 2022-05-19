import { useContext, useState } from "react"
import AppContext from "../../context/AppContext"

import Row from "../shared/Row"
import Header from "../shared/Header"
import Input from "../shared/Input"

const Main = () => {
  const {size, objects, setObjects, updateValue} = useContext(AppContext)
  const [sortBy, setSortBy] = useState('')

  const handleSort = (colName)=>{
    const newArray = [...objects].sort((a,b) => (a[colName] > b[colName]) ? 1 : ((b[colName] > a[colName]) ? -1 : 0))
    setObjects(newArray)
  }

  return (
    <div className="flex-1 p-10 ">
      <Row columns={size}>
       {
        Array.apply(null, { length: size }).map((e, i) => (
          <Header 
            number={i+1} 
            key={`header${i}`}
            onclick={()=>handleSort(`header${i+1}`)}
          />
        ))
       }
      </Row>
      {
        (objects || []).map((object, i)=>{
          return (
            <Row columns={size} key={`row${i}`}>
              {
                Object.keys(object).map((key, i)=>{
                  let objId = object.id
                  if(key!=='id'){
                    return (
                      <Input 
                        value={object[key]} 
                        key={`input${i}`}
                        onchange={(e)=>{updateValue(e.target.value, key, objId)}}
                      />
                    )
                  }
                })
              }
            </Row>
          )
        })
      }
    </div>
  )
}

export default Main