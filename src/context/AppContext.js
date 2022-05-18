import { createContext, useEffect, useState } from "react";
import {faker} from '@faker-js/faker'

const AppContext = createContext()

export const AppProvider = ({children}) =>{

  const [size, setSize] = useState(2)
  const [objects, setObjects] = useState([])

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
    console.log(newArr);
    setObjects(newArr);
  }

  useEffect(()=>{
    createObjectArr()
  },[size])
  
  return <AppContext.Provider value={{
    size,
    setSize,
    objects,
    setObjects
  }}>
    {children}
  </AppContext.Provider>
}

export default AppContext