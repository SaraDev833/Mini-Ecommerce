import React, { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

const Popup = () => {
    const { popUp, popupData , closePopUp, setPopUp } = useContext(PopupContext);
  
  if(!popUp) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-sky-600 w-[400px] p-5 rounded-lg shadow-lg relative">

                    {/* Close Button */}
                    <button
                        onClick={() => closePopUp()}
                        className="absolute top-2 right-3 text-xl font-bold"
                    >
                        <span className="material-symbols-outlined !text-sm text-white" >
                          close
                        </span>
                    </button>

                    <div className="flex justify-between items-center">
                        <div className="w-[50%]">
                            <img src={popupData.image} alt="" className="h-30 object-cover " />
                        </div>
                        <div className="w-[50%]">
                            <h2 className="text-lg text-white font-bold">{popupData.title}</h2>
                            <p className="text-slate-400 text-sm ">{popupData.des}</p>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
};

export default Popup;