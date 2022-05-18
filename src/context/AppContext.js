import { createContext, useState } from "react";
import {faker} from '@faker-js/faker'

const AppContext = createContext()

export const AppProvider = ({children}) =>{

  const [size, setSize] = useState(5)
  
  let objects = []

  for (let i=0; i<size; i++){
    let newObj ={}
    for (let j=0; j<size; j++){
      let name = faker.name.findName()
      newObj[`header${j}`] = name
    }
    objects.push(newObj);
  }

  console.log(objects);
  
  return <AppContext.Provider value={{
    size,
    setSize,
    objects
  }}>
    {children}
  </AppContext.Provider>
}

export default AppContext