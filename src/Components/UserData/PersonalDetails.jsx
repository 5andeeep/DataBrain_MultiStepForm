import React from "react";

const PersonalDetails = ({ formData, setFormData }) => {
  const { firstName, lastName, email, password } = formData;

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="First Name"
        required
        value={firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        required
        value={lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
    </div>
  );
};

export default PersonalDetails;
