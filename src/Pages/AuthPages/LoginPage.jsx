import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import GoogleButton from "./GoogleButton";

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { signInUser } = useAuth();
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state || "/";

  const handleLogin = (data) => {
    // console.log(data);
    signInUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        toast.success("Login successful!");
        navigate(from);
        reset()
      })
      .catch(err => {
        if (err.code === "auth/invalid-credential") {
          toast.error("Invalid email/password");
        }
      })
  };

  return (
    <div className="max-w-md mx-auto h-screen">
      <h2 className="text-2xl font-extrabold mb-2 md:text-5xl">Please Login</h2>
      <p className="mb-4 text-primary-content!">Welcome back! Enter your details to login.</p>

      <form onSubmit={handleSubmit(handleLogin)}>
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
              minLength: { value: 6, message: "Minimum 6 characters" }
            })}
          />
          {errors.password && <p className="text-error! text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Link to register */}
        <p className="mt-4">
          New to ZapShift?
          <Link to="/register" className="ml-1 text-accent! underline">
            Register
          </Link>
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-1 mt-6">
          <button type="submit" className="bg-accent text-white p-2 rounded cursor-pointer hover:bg-accent/80">Login</button>

          <p className="text-center">Or</p>

          <GoogleButton btnName={"Login"}></GoogleButton>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
