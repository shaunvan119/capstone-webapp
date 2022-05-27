import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [ allPhotos, setAllPhotos] = useState([]);
     
console.log(allPhotos)
    return (
        
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}