import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext=createContext()

const AppContextProvider=(props)=>{
    const currSymbol="$"
    const value={
        doctors,
        currSymbol
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider