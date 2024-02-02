import React from "react";

const PaymentDetails = ({ formData, setFormData }) => {
  const { holderName, cardNumber, expiry, cvv } = formData;

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Card Holder Name"
        required
        value={holderName}
        onChange={(e) =>
          setFormData({ ...formData, holderName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Card Number"
        required
        value={cardNumber}
        onChange={(e) =>
          setFormData({ ...formData, cardNumber: e.target.value })
        }
      />
      <input
        type="date"
        placeholder="Expirty Date"
        required
        value={expiry}
        onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
      />
      <input
        type="text"
        placeholder="CVV"
        required
        value={cvv}
        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
      />
    </div>
  );
};

export default PaymentDetails;
