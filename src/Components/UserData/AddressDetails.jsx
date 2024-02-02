import React from "react";

const AddressDetails = ({ formData, setFormData }) => {
  const { house, city, state, pincode } = formData;

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="House no. / Street no."
        required
        value={house}
        onChange={(e) => setFormData({ ...formData, house: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        required
        value={city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="State"
        required
        value={state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
      />
      <input
        type="text"
        placeholder="Pincode"
        required
        value={pincode}
        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
      />
    </div>
  );
};

export default AddressDetails;
