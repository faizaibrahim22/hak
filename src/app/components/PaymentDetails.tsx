"use client"
import React from 'react';

const PaymentDetails = ({ formData, onChange }: any) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ 
      paymentDetails: {
        ...formData.paymentDetails, 
        [name]: value 
      } 
    });
  };

  return (
    <div className=' shadow-lg  text-xl font-serif text-black  relative bottom-48'>
      <h3  className='font-serif'>Payment Details</h3>
      <input
        type="text"
        name="cardNumber"
        value={formData?.paymentDetails?.cardNumber || ''}  
        onChange={handleInputChange}
        placeholder="Card Number"
        
      />
      <input
        type="text"
        name="expiryDate"
        value={formData?.paymentDetails?.expiryDate || ''}
        onChange={handleInputChange}
        placeholder="Expiry Date (MM/YY)"
      />
     
    </div>
  );
};

export default PaymentDetails;
