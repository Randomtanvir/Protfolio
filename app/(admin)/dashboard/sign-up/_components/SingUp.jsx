"use client";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            {...register("fullName", { required: "Full name is required" })}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 
                       bg-white dark:bg-slate-800 
                       text-gray-900 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Email address
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 
                       bg-white dark:bg-slate-800 
                       text-gray-900 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 
                       bg-white dark:bg-slate-800 
                       text-gray-900 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 
                       bg-white dark:bg-slate-800 
                       text-gray-900 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 font-medium transition-colors"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
