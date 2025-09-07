"use client";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Email address
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 
                         bg-white dark:bg-slate-800 
                         text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 
                         bg-white dark:bg-slate-800 
                         text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              {...register("remember")}
              className="accent-purple-600 dark:accent-purple-500"
            />
            Remember for 30 days
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 font-medium transition-colors"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
