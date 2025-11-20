import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import GoogleButton from "./GoogleButton";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { registerUser } = useAuth()
  const navigate = useNavigate();

  const handleRegister = (data) => {
    // console.log(data);
    reset()
    registerUser(data.email, data.password)
    .then(result => {
      console.log(result.user);
      navigate("/login")
    })
    .catch(err => {
      // console.log(err);
      if (err.code === "auth/email-already-in-use") {
        toast.error("User already exists");
      }
    })
  };

  return (
    <div className="max-w-md mx-auto pb-10">
      <h2 className="text-2xl font-extrabold mb-2 md:text-5xl">Please Register</h2>
      <p className="mb-4 text-primary-content!">Create a new account by filling the form below.</p>

      <form onSubmit={handleSubmit(handleRegister)}>
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-secondary-content p-2 w-full rounded"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-error! text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-secondary-content p-2 w-full rounded"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-error! text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-secondary-content p-2 w-full rounded"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
          />
          {errors.password?.type === "pattern" && <p className="text-error! text-sm mt-1">Password must have atleast 1 Uppercase, lowercase, number and special character</p>}
          {errors.password && <p className="text-error! text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-secondary-content p-2 w-full rounded"
            {...register("confirmPassword", { required: "Confirm password is required" })}
          />
          {errors.confirmPassword && <p className="text-error text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

        {/* Link to register */}
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-accent! underline">
            Login
          </Link>
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-1 mt-6">
          <button type="submit" className="bg-accent text-white p-2 rounded cursor-pointer hover:bg-accent/80">Register</button>

          <p className="text-center">Or</p>

          <GoogleButton btnName={"Register"}></GoogleButton>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
