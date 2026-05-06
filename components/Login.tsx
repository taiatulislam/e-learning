"use client";

import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { OTPField } from "./OtpField";
import CustomCheckBox from "./CustomCheckBox";

type UserDataType = {
  email: string;
  password: string;
  otp: string;
};

type CreateDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
};

export default function Login() {
  const [userData, setUserData] = useState<UserDataType>({
    email: "",
    password: "",
    otp: "",
  });
  const [createData, setCreateData] = useState<CreateDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [step, setStep] = useState<number>(1);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [otpFields, setOtpFields] = useState<string[]>(new Array(6).fill(""));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (step === 1) {
      setUserData((prev) => ({ ...prev, [name]: value }));
    } else if (step === 3) {
      setCreateData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInputPhone = (value: string) => {
    setCreateData((prev) => ({ ...prev, phone: value }));
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("userData", userData);
    console.log("remember Me", rememberMe);
  };

  const handleOTP = async (
    e: React.FormEvent<HTMLFormElement>,
    purpose: string,
  ) => {
    e.preventDefault();
    console.log("purpose", purpose);
  };

  const handleCreateAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("createData", createData);
  };

  return (
    <div className="h-full flex items-center">
      {step === 1 ? (
        <div className="w-full px-8">
          {/* Title */}
          <p className="text-[18px] text-center font-bold text-primary capitalize mb-5">
            Login To Account
          </p>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter Email or Phone Number"
                value={userData?.email}
                onChange={handleInputChange}
                required
                autoComplete="new-email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleInputChange}
                required
                autoComplete="new-password"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
              />

              {!showPassword ? (
                <IoIosEye
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary"
                  onClick={handleShowPassword}
                />
              ) : (
                <IoIosEyeOff
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary"
                  onClick={handleShowPassword}
                />
              )}
            </div>

            {/* Remember me & Forgot Password */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <CustomCheckBox
                value={rememberMe}
                label="Remember me"
                handleChange={() => setRememberMe(!rememberMe)}
              />

              <button
                type="button"
                className="text-gray text-sm cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-blue-900 text-white py-2 mt-10 mb-2 rounded cursor-pointer"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>

          <p className="text-xs text-gray text-center mt-5">
            Do not have an Account ?{" "}
            <span
              className="text-primary font-bold cursor-pointer"
              onClick={() => setStep(3)}
            >
              Sign Up
            </span>
          </p>
        </div>
      ) : step === 2 ? (
        <div className="px-8 w-full">
          <form onSubmit={(e) => handleOTP(e, "login")}>
            {/* Title */}
            <h2 className="text-[18px] font-bold text-primary capita mb-7 text-center">
              Verify with OTP
            </h2>

            {/* OTP Fields */}
            <OTPField otpFields={otpFields} setOtpFields={setOtpFields} />

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-primary text-white py-2 mt-10 mb-2 rounded cursor-pointer`}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      ) : step === 3 ? (
        <div className="w-full px-8">
          {/* Title */}
          <p className="text-[18px] text-center font-bold text-primary capitalize mb-5">
            Create Account
          </p>

          <form className="space-y-6" onSubmit={handleCreateAccount}>
            {/* Grid for two inputs per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={createData?.firstName}
                onChange={handleInputChange}
                required
                autoComplete="new-firstName"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
              />

              {/* Last Name */}
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={createData?.lastName}
                onChange={handleInputChange}
                required
                autoComplete="new-lastName"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
              />

              {/* Email */}
              <div className="relative md:col-span-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={createData?.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="new-email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
                />
              </div>

              {/* Password */}
              <div className="relative md:col-span-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  value={createData.password}
                  onChange={handleInputChange}
                  required
                  autoComplete="new-password"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
                />

                {!showPassword ? (
                  <IoIosEye
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary"
                    onClick={handleShowPassword}
                  />
                ) : (
                  <IoIosEyeOff
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary"
                    onClick={handleShowPassword}
                  />
                )}
              </div>

              {/* Phone */}
              <div className="relative md:col-span-2">
                <PhoneInput
                  country={"bd"}
                  value={createData?.phone}
                  onChange={(phone) => handleInputPhone(phone)}
                  inputClass="!w-full"
                  containerClass="!w-full"
                  buttonClass="!h-full"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-blue-900 text-white py-2 mt-10 mb-2 rounded cursor-pointer"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>

          <p className="text-xs text-gray text-center mt-3">
            Already have an Account ?{" "}
            <span
              className="text-primary font-bold cursor-pointer"
              onClick={() => setStep(1)}
            >
              Login
            </span>
          </p>
        </div>
      ) : step === 4 ? (
        <div className="px-8 w-full">
          <form onSubmit={(e) => handleOTP(e, "emailVerify")}>
            {/* Title */}
            <h2 className="text-[18px] font-bold text-primary capita mb-7">
              Verify with OTP
            </h2>

            {/* OTP Fields */}
            <OTPField otpFields={otpFields} setOtpFields={setOtpFields} />

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-primary text-white py-2 mt-10 mb-2 rounded cursor-pointer`}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
