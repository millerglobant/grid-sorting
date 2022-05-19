import { createContext, useEffect, useState } from "react";
import {faker} from '@faker-js/faker'

const AppContext = createContext()

export const AppProvider = ({children}) =>{

  const [size, setSize] = useState(2)
  const [objects, setObjects] = useState([])

  //Create an array of objects
  const createObjectArr = ()=>{
    let newArr = []
    for (let i=0; i<size; i++){
      let newObj ={}
      for (let j=0; j<size; j++){
        let name = faker.name.findName()
        newObj['id'] = `${i+1}${j+1}`
        newObj[`header${j+1}`] = name
      }
      newArr.push(newObj);
    }
    setObjects(newArr);
  }

  useEffect(()=>{
    createObjectArr()
  },[size])

  // Update a value of each input field
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
  
  return <AppContext.Provider value={{
    size,
    setSize,
    objects,
    setObjects,
    updateValue
  }}>
    {children}
  </AppContext.Provider>
}

export default AppContext