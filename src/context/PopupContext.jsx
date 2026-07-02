import { createContext, useState } from "react";

export const PopupContext = createContext();


const PopupProvider = ({children}) =>{
    const [popUp, setPopUp] = useState(false);

    return (
        <PopupContext.Provider
        value={{popUp , setPopUp}}
        >
            {children}
        </PopupContext.Provider>
    )
}
export default PopupProvider