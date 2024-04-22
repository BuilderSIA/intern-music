/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";


const myContext = createContext();
    


export const Provider = ({children}) => {
    
    const [modal, setModal] = useState(false);
    



    return(
        <myContext.Provider value={{
            modal,setModal
        }}>
            {children}
        </myContext.Provider>
    )
};



// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = () =>{
    return useContext(myContext);
}