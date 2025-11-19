import React from "react";

const InputField = ({ label, type = "text", name, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border p-2 w-full rounded"
      />
    </div>
  );
};

export default InputField;
