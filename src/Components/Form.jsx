import React, { useState } from "react";
import PersonalDetails from "./UserData/PersonalDetails";
import AddressDetails from "./UserData/AddressDetails";
import PaymentDetails from "./UserData/PaymentDetails";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    house: "",
    city: "",
    state: "",
    pincode: "",
    holderName: "",
    cardNumber: "",
    expiry: "",
    CVV: "",
  });

  const FormTitles = ["Personal Details", "Address Details", "Payment Details"];

  //   display form according to step
  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <AddressDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <PaymentDetails formData={formData} setFormData={setFormData} />;
    }
  };

  // handle next and submit operation
  const handleNextSubmit = () => {
    if (page === FormTitles.length - 1) {
      alert("Form successfully submitted!");
      console.log(formData);
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  return (
    <div className="form">
      <div className="page-number">
        {page + 1} / {FormTitles.length}
      </div>
      <div className="form-title">
        <h1>{FormTitles[page]}</h1>
      </div>
      <div className="form-input-container">{PageDisplay()}</div>
      <div className="form-btns">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page == 0}
        >
          Back
        </button>
        <button onClick={handleNextSubmit}>
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Form;
