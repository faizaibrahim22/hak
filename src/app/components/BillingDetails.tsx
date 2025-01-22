"use client";
import React from "react";

interface FormData {
  billingAddress: string;
  paymentDetails: {
    cardNumber: string;
    expiryDate: string;
  };
}

interface BillingDetailsProps {
  formData: FormData;
  onChange: (updatedData: FormData) => void;
}

const BillingDetails: React.FC<BillingDetailsProps> = ({ formData, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({
      ...formData,
      billingAddress: value,
    });
  };

  return (
    <div className="shadow-lg text-xl font-serif text-black relative bottom-48">
      <h3 className="font-serif">Billing Address</h3>
      <input
        type="text"
        name="billingAddress"
        value={formData.billingAddress}
        onChange={handleInputChange}
        placeholder="Billing Address"
        className="border p-2 mt-2 rounded mb-4"
      />
    </div>
  );
};

export default BillingDetails;
