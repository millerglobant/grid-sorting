import { useContext } from "react"
import AppContext from "../../context/AppContext"

import Row from "../shared/Row"
import Header from "../shared/Header"
import Input from "../shared/Input"

const Main = () => {
  const {size, objects, setObjects} = useContext(AppContext)

  const updateValue = (newValue, key, objId) =>{
    const newObjects = [...objects]
    const index = newObjects.findIndex(object =>{
      return object.id == objId
    })
    if(index !== -1){
      newObjects[index][key] = newValue
    }
    setObjects([...newObjects]);
  }


  return (
    <div className="flex-1 p-10 ">
      <Row columns={size}>
       {
        Array.apply(null, { length: size }).map((e, i) => (
          <Header number={i+1} key={`header${i}`}/>
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