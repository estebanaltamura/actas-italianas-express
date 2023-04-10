import { createContext,useState } from "react"

export const isLoadingContext = createContext()

export const IsLoadingContext = ({children})=>{

    const [isLoading, setIsLoading] = useState(false)

    return(
        <isLoadingContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </isLoadingContext.Provider>
    )
}