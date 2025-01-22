"use client";
import React from "react";

// Assuming FormData is already defined somewhere in your code
interface PaymentDetailsData {
  cardNumber: string;
  expiryDate: string;
}

interface FormData {
  billingAddress: string;
  paymentDetails: PaymentDetailsData;
}

interface PaymentDetailsProps {
  formData: FormData;
  onChange: (updatedData: FormData) => void;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ formData, onChange }) => {
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...formData,
      paymentDetails: {
        ...formData.paymentDetails,
        cardNumber: e.target.value,
      },
    });
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...formData,
      paymentDetails: {
        ...formData.paymentDetails,
        expiryDate: e.target.value,
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        name="cardNumber"
        value={formData.paymentDetails.cardNumber}
        onChange={handleCardNumberChange}
        placeholder="Card Number"/>
      <input
        type="text"
        name="expiryDate"
        value={formData.paymentDetails.expiryDate}
        onChange={handleExpiryDateChange}
        placeholder="Expiry Date"/>
     
    </div>
  );
};

export default PaymentDetails;
