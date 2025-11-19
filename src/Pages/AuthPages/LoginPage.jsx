import React from "react";
import Form from "../../../Components/Form/Form";

const LoginPage = () => {
  const fields = [
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
    { label: "Password", name: "password", type: "password", placeholder: "Enter your password" },
  ];

  const buttons = [
    { label: "Login", type: "submit" },
    { label: "Login with Google", type: "button", className: "bg-red-500 text-white p-2 rounded" },
  ];

  return (
    <Form title="Please Login" paragraph="Welcome back! Enter your details to login." fields={fields} buttons={buttons}></Form>
  );
};

export default LoginPage;
