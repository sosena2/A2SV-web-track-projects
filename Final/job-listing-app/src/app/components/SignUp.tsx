"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

type Data = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const router = useRouter();
  const [signupError, setSignupError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<Data>();

  const onSubmit = async (data: Data) => {
    try {
      setSignupError(""); // previous error clearing
      const body = { ...data, role: "user" };

      const res = await fetch("https://akil-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (res.ok) {
        router.push(`/verifyEmail?email=${data.email}`);
      } else {
        setSignupError(result.message || "Signup failed. Please try again.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSignupError(error.message);
      } else {
        setSignupError("Signup failed.Error unknown");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-950 mb-6">
          Sign Up Today!
        </h1>

        {/* Google button */}
        <button
          className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-md mb-4 hover:bg-gray-100 transition"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <FcGoogle className="text-xl mr-2" />
          Sign in with Google
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">
            Or Sign Up with Email
          </span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Error message display */}
        {signupError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-center text-sm font-medium">
            {signupError}
          </div>
        )}

        {/* Sign up form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Full name is required" })}
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter email address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              placeholder="Enter password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-600 text-sm mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              placeholder="Confirm password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">
              {errors.confirmPassword?.message}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded text-white ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed w-full rounded-md"
                : "w-full bg-[#2D298E] text-white py-3 rounded-2xl hover:bg-indigo-700 transition"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Continue"}
          </button>
        </form>

        {/* Footer section */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        <p className="text-xs text-center text-gray-400 mt-4">
          By clicking 'Continue', you acknowledge that you have read and
          accepted our{" "}
          <a href="#" className="text-blue-700 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-700 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;