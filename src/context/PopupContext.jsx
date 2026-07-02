import { createContext, useState } from "react";

export const PopupContext = createContext();


const PopupProvider = ({children}) =>{
    const [popUp, setPopUp] = useState(false);

    const [popupData , setPopupData] = useState({
        title: "",
        image:"",
        des:""
    });

    const openPop=(data)=>{
        setPopupData(data);
        setPopUp(true)
    }

    const closePopUp = ()=>{
        setPopUp(false)
    }
    return (
        <PopupContext.Provider
        value={{popUp , setPopUp, popupData ,setPopupData , openPop , closePopUp}}
        >
            {children}
        </PopupContext.Provider>
    )
}
export default PopupProvider