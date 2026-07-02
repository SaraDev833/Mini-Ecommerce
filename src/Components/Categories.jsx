import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Popup from './Popup.jsx';
import { PopupContext } from '../context/PopupContext.jsx';
// import { Gift } from 'lucide-react'



const Categories = () => {
  const { popUp, setPopUp } = useContext(PopupContext);
  return (
    <div className="w-full lg:w-[20%] bg-white shadow rounded-lg p-4">
      <h3 className="font-bold text-lg mb-4">Why ShopLite?</h3>
      {popUp && <Popup title="Explore your special offer" image="/images/gift.png" des="Sorry! we have not this feature available as it is a mini ecommerce project" />}

      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
          <span className="material-symbols-outlined text-blue-600">
            local_shipping
          </span>
          <div>
            <h4 className="font-medium text-sm">Fast Delivery</h4>
            <p className="text-xs text-gray-500">
              Quick delivery on selected products
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
          <span className="material-symbols-outlined text-blue-600">
            payments
          </span>
          <div>
            <h4 className="font-medium text-sm">Secure Payment</h4>
            <p className="text-xs text-gray-500">
              Safe and protected checkout
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
          <span className="material-symbols-outlined text-blue-600">
            assignment_return
          </span>
          <div>
            <h4 className="font-medium text-sm">Easy Return</h4>
            <p className="text-xs text-gray-500">
              Simple return within 7 days
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
          <span className="material-symbols-outlined text-blue-600">
            sell
          </span>
          <div>
            <h4 className="font-medium text-sm">Best Price</h4>
            <p className="text-xs text-gray-500">
              Quality products at fair price
            </p>
          </div>
        </div>
      </div>

      {/* Special Offer */}
      <div className="mt-5 bg-blue-100 rounded-lg p-3 flex items-center gap-3">
        <img src="../../images/gift.png" className="h-16 sm:h-20" />

        <div>
          <h4 className="font-semibold text-sm">Special Offer</h4>
          <p className="text-sm">Get 20% off</p>
          <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm" onClick={() => setPopUp(!popUp)}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Categories
