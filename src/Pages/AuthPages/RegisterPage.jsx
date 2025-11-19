import React from "react";
import Form from "../../../Components/Form/Form";

const RegisterPage = () => {
  const fields = [
    { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
    { label: "Password", name: "password", type: "password", placeholder: "Enter your password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm password" },
  ];

  const buttons = [
    { label: "Register", type: "submit" },
    { label: "Register with Google", type: "button", className: "bg-red-500 text-white p-2 rounded" },
  ];

  return (
    <Form title="Please Register" paragraph="Create a new account by filling the form below." fields={fields} buttons={buttons}></Form>
  );
};

export default RegisterPage;
