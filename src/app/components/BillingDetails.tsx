"use client"
import React from 'react';

const BillingDetails = ({ formData, onChange }: any) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ billingAddress: e.target.value });
  };

  return (
    <div className='relative bottom-60 text-xl text-orange-700 shadow-xl' >
      <h3>Billing Address</h3>
      <input
        type="text"
        value={formData?.billingAddress || ''} 
        onChange={handleInputChange}
        placeholder="Enter your billing address"
      />
    </div>
  );
};

export default BillingDetails;
