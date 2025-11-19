import React from "react";
import InputField from "./InputField";
import { useForm } from "react-hook-form";

const Form = ({ title, paragraph, fields, buttons, onSubmit }) => {
  const { register, handleSubmit  } = useForm();

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{paragraph}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <InputField key={index} {...field} register={register}/>
        ))}

        <div className="flex flex-col gap-2 mt-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              type={btn.type || "button"}
              className={btn.className || "bg-blue-500 text-white p-2 rounded"}
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Form;
