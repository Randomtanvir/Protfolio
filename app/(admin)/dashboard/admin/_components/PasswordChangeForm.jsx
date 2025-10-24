"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const PasswordChangeForm = () => {
  const [showPasswords, setShowPasswords] = useState({
    currentPass: false,
    newPass: false,
    confirmPass: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentPass: "",
      newPass: "",
      confirmPass: "",
    },
  });

  const onPasswordSubmit = async (data) => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (!response.ok) {
        // 🛑 Server error message show
        throw new Error(res.message || "Failed to change password");
      }

      reset();
      toast.success(res.message || "Password changed successfully ✅");
    } catch (error) {
      toast.error(error.message || "Password change failed ❌");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onPasswordSubmit)}
        className="bg-white/80 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-white/20 rounded-2xl p-8 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-pink-500 dark:text-pink-400" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Security Settings
          </h2>
        </div>

        <div className="space-y-6">
          {/* Current Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.currentPass ? "text" : "password"}
                {...register("currentPass", {
                  required: "Current password is required",
                })}
                className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg px-4 py-3 pr-12 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("currentPass")}
                className="absolute right-3 top-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
              >
                {showPasswords.currentPass ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.currentPass && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                {errors.currentPass.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.newPass ? "text" : "password"}
                {...register("newPass", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full bg-white dark:bg-white/5 border rounded-lg px-4 py-3 pr-12 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 transition-all duration-300 ${
                  errors.newPass
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-300 dark:border-white/20 focus:border-pink-500 focus:ring-pink-400/20"
                }`}
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("newPass")}
                className="absolute right-3 top-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
              >
                {showPasswords.newPass ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.newPass && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                {errors.newPass.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.confirmPass ? "text" : "password"}
                {...register("confirmPass", {
                  required: "Please confirm new password",
                  validate: (value, formValues) =>
                    value === formValues.newPass || "Passwords do not match",
                })}
                className={`w-full bg-white dark:bg-white/5 border rounded-lg px-4 py-3 pr-12 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 transition-all duration-300 ${
                  errors.confirmPass
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-300 dark:border-white/20 focus:border-pink-500 focus:ring-pink-400/20"
                }`}
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirmPass")}
                className="absolute right-3 top-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
              >
                {showPasswords.confirmPass ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.confirmPass && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                {errors.confirmPass.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Lock className="w-5 h-5" />
            )}
            {isLoading ? "Changing..." : "Change Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordChangeForm;
