/* eslint-disable */
import { createContext, useState, useContext } from "react";

const StepperContext = createContext<any>({userData: "", setUserData: null})

export function UseContextProvider({Children}: any){
  const [userData, setUserData] = useState("")
  return (
    <StepperContext.Provider value={{userData , setUserData }}>
    {Children}
    </StepperContext.Provider>
  );
}

export function useStepperContext(){
  const {userData, setUserData} = useContext(StepperContext)
  return { userData, setUserData };
}


